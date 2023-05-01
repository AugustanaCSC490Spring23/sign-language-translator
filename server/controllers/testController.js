const mongoose = require("mongoose");

const Test = require("../models/test");
const Quiz = require("../models/quiz");
const Item = require("../models/item");
const asyncCatch = require("../utils/asyncCatch");

exports.createTest = asyncCatch(async (req, res, next) => {
  const {
    numQuizzes,
    difficulty,
    topic,
    category,
    specialPool,
    title,
    qualifyFor,
  } = req.body;
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
    specialPoolObjectIds = specialPool.map((id) => mongoose.Types.ObjectId(id));
  }

  test.quizzes = await test.generateQuizzes(
    numQuizzes,
    difficulty,
    topic,
    category,
    specialPoolObjectIds
  );

  await test.save();

  res.status(200).send({
    status: "success",
    data: {
      test,
    },
  });
});

exports.getTest = asyncCatch(async (req, res, next) => {
  const test = await Test.findOne({ _id: req.params.id }).lean().exec();
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

exports.getQuiz = async (req, res, next) => {
  const quizId = req.params.id;
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//// Grade Test
exports.gradeTest = asyncCatch(async (req, res, next) => {
  const testId = req.params.id;
  const { responses } = req.body;

  const test = await Test.findById(testId).populate("quizzes").exec();
  if (!test) {
    return res.status(404).json({
      success: false,
      message: "Test not found",
    });
  }

  // Get quizzes with their order numbers
  const quizOrderMap = new Map();
  test.quizzes.forEach((quiz) => {
    quizOrderMap.set(quiz.orderNumber, quiz._id.toString());
  });

  // Transform user's response into array of quizId and answerId
  const transformedResponses = responses.map((answer, index) => {
    const quizId = quizOrderMap.get(index + 1);
    if (!quizId) {
      throw new Error(`Quiz with order number ${index + 1} not found`);
    }
    return { quizId, answerId: answer };
  });

  console.log(transformedResponses);

  const score = await test.gradeTest(transformedResponses);
  await test.save(); // save the updated score to the database

  return res.status(200).json({
    success: true,
    message: "Test graded successfully",
    score,
    test,
  });
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
