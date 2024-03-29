const mongoose = require("mongoose");

const Test = require("../models/test");
const Quiz = require("../models/quiz");
const Item = require("../models/item");
const User = require("../models/user");
const FlashcardsCollection = require("../models/flashcardsCollection");

const asyncCatch = require("../utils/asyncCatch");

// ** create test using TestSchema.generateQuizzes ** //
exports.createTest = asyncCatch(async (req, res, next) => {
  const {
    numQuizzes,
    difficulty,
    topic,
    category,
    specialPool,
    title,
    qualifyFor,
  } = req.body.testQuery;
  console.log(req.body)
  const test = new Test({
    difficulty,
    numQuizzes,
    title,
    qualifyFor,
    category,
    topic,
    testTaker: req.user._id,
  });

  let specialPoolObjectIds;
  if (specialPool) {
    const specialPoolDoc = await FlashcardsCollection.findOne(
      { _id: specialPool },
      { items: 1 }
    ).lean();
    specialPoolObjectIds = specialPoolDoc.items.map((id) =>
      mongoose.Types.ObjectId(id)
    );
  }

  test.quizzes = await test.generateQuizzes(
    numQuizzes,
    difficulty,
    topic,
    category,
    specialPoolObjectIds
  );

  await test.save();

  // Add the test to the user's `tests` array
  req.user.tests.push(test);

  // Disable validation for this operation
  await req.user.save({ validateBeforeSave: false });

  res.status(200).send({
    status: "success",
    data: {
      testId: test._id,
    },
  });
});

// get all tests with info: title, topic, qualifyFor, dateTaken, score
exports.getAllTestsWithBasicInfo = asyncCatch(async (req, res, next) => {
  const user = await User.findById(req.user._id)
    .populate("tests")
    .lean()
    .exec();
  const tests = user.tests.map((test) => {
    const { title, topic, qualifyFor, dateTaken, score, _id } = test;
    let isCompleted = score !== null;
    return { title, topic, qualifyFor, dateTaken, score, isCompleted, _id };
  });

  // Sort the tests by the latest dateTaken
  tests.sort((a, b) => new Date(b.dateTaken) - new Date(a.dateTaken));

  res.status(200).json({
    success: true,
    data: { tests },
  });
});

// ** get test by id, this is to get the test for display (no answers available) ** //
// New function - getTestWithoutAnswers
exports.getTestWithoutAnswers = asyncCatch(async (req, res, next) => {
  const { id } = req.params;

  const test = await Test.findOne({
    _id: id,
    testTaker: req.user._id,
  })
    .populate("quizzes")
    .lean();

  if (!test) {
    return next(new ErrorResponse("Unauthorized or Test not found", 401));
  }

  // Exclude the correctAnswer property from each quiz object
  const quizzesWithoutCorrectAnswers = test.quizzes.map((quiz) => {
    const { correctAnswer, ...quizWithoutCorrectAnswer } = quiz;
    return quizWithoutCorrectAnswer;
  });

  res.status(200).send({
    status: "success",
    data: {
      test: {
        ...test,
        quizzes: quizzesWithoutCorrectAnswers,
      },
    },
  });
});

// ** get fully detailed test by id, can only be retrieved after being taken ** //
exports.getTest = asyncCatch(async (req, res, next) => {
  const test = await Test.findOne({
    _id: req.params.id,
    // score: { $exists: true },
  })
    .lean()
    .exec();

  if (!test) {
    return res.status(404).send({
      status: "error",
      message: "Test not found or not scored yet",
    });
  }

  const quizIds = test.quizzes.map((quiz) => quiz.toString());

  const quizPromises = quizIds.map((quizId) =>
    Quiz.findOne({ _id: quizId })
      .populate("choices")
      .populate("correctAnswer")
      .lean()
      .exec()
  );

  const quizzes = await Promise.all(quizPromises);
  test.quizzes = quizzes;

  res.status(200).send({
    status: "success",
    data: {
      test,
    },
  });
});

// ** create a single quiz for a particular purpose ** //
exports.createQuiz = asyncCatch(async (req, res, next) => {
  const word = req.body.word;

  const item = await Item.find({ text: word });

  if (!item.length) {
    return res
      .status(404)
      .json({ error: `Could not find any items with word "${word}"` });
  }

  const correctAnswer = item[0]._id;
  const categoryOfCorrectAnswer = item[0].category;

  const query = { category: categoryOfCorrectAnswer };

  const promises = [
    Item.aggregate([
      { $match: { ...query, _id: { $ne: correctAnswer } } },
      { $sample: { size: 3 } },
      { $project: { _id: 1 } },
    ]),
  ];

  const [wrongChoices] = await Promise.all(promises);

  const allChoices = await Item.find({
    _id: {
      $in: [correctAnswer, ...wrongChoices.map((choice) => choice._id)],
    },
  })
    .lean()
    .exec();
  let choices = allChoices.map((choice) => choice._id.toString());

  // Shuffle the choices array using the Fisher-Yates shuffle algorithm
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  // Set the quizType to "b" if the category is "communication"
  const quizType = categoryOfCorrectAnswer === "communication" ? "b" : "a";

  // Create the quiz object with the necessary properties, including the order number
  const quiz = new Quiz({
    quizType: quizType,
    choices,
    correctAnswer,
    topic: item[0].topic,
  });

  await quiz.save();

  return res.status(200).json({ quiz });
});

// ** get quiz by id only when it's already scored** //
exports.getQuiz = asyncCatch(async (req, res, next) => {
  const quiz = await Quiz.findOne({
    _id: req.params.id,
    isCorrect: { $exists: true }, // only return quizzes that have been scored
  })
    .lean()
    .populate("choices")
    .populate("correctAnswer")
    .exec();

  if (!quiz) {
    return res.status(404).send({
      status: "fail",
      message: "Quiz not found or has not been scored yet",
    });
  }

  res.status(200).send({
    status: "success",
    data: {
      quiz,
    },
  });
});

// ** Grade test using TestSchema.gradeTest ** //
exports.gradeTest = asyncCatch(async (req, res, next) => {
  const testId = req.params.id;
  const responses = req.body.responses;

  const test = await Test.findById(testId).populate("quizzes").exec();
  if (!test) {
    return res.status(404).json({
      success: false,
      message: "Test not found",
    });
  }

  // Check if the test has already been graded
  if (test.score) {
    return res.status(400).json({
      success: false,
      message: "Test has already been graded",
    });
  }

  const score = await test.gradeTest(responses);
  await test.save(); // save the updated score to the database

  return res.status(200).json({
    success: true,
    message: "Test graded successfully",
    score,
    test,
  });
});

// ** Grade quiz using QuizSchema.gradeQuiz ** //
exports.gradeQuiz = asyncCatch(async (req, res, next) => {
  const quizId = req.params.id;
  const userAnswerId = req.body.userAnswerId;

  try {
    const quiz = await Quiz.findById(quizId).exec();
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const userAnswer = await Item.findById(userAnswerId).exec();
    if (!userAnswer) {
      return res.status(404).json({ message: "User answer not found" });
    }

    await quiz.gradeQuiz(userAnswer);

    res.status(200).send({
      status: "success",
      message: "Quiz graded successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//// ONLY FOR DELETING THE DATABASE AFTER TESTING DB
exports.deleteAll = asyncCatch(async (req, res, next) => {
  try {
    // Delete all quizzes
    await Quiz.deleteMany({});
    console.log("All quizzes deleted");

    // Delete all tests
    await Test.deleteMany({});
    console.log("All tests deleted");

    res.status(200).json({
      status: "success",
      message: "All quizzes and tests deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Error deleting quizzes and tests",
    });
  }
});
