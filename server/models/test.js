const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = require("./item");
const Quiz = require("./quiz");

const TestSchema = new Schema({
  difficulty: Number,
  numQuizzes: Number,
  title: String,
  quizzes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
  qualifyFor: String,
  topic: String,
  category: String,
  dateTaken: {
    type: Date,
    default: Date.now,
  },
  testTaker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  score: Number,
  passingScore: Number,
});

TestSchema.index({ difficulty: 1, dateTaken: 1, title: 1 });

/////////// METHODS

// ** generate new quizzes for test ** //
TestSchema.methods.generateQuizzes = async (
  numQuizzes,
  difficulty,
  topic,
  category,
  specialPool
) => {
  const query = {
    category: { $ne: "alphabet" },
  };

  // Add the category and difficulty conditions to the query object if they are specified
  if (topic) {
    if (topic !== "overall") {
      query.topic = topic;
    }
  }
  if (difficulty) {
    query.difficulty = difficulty;
  }

  // Override the query object if a special pool (flashcards) is specified
  if (specialPool) {
    query._id = { $in: specialPool };
  }

  // Use the built-up query object to find the items
  const items = await Item.aggregate([
    { $match: query },
    { $sample: { size: numQuizzes } },
  ]);

  // Shuffle the words using the Fisher-Yates shuffle algorithm
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  const quizzes = [];
  for (let i = 0; i < numQuizzes; i++) {
    const correctAnswer = items[i]._id;
    const quizTopic = items[i].topic;
    const category = items[i].category;
    let keys;

    // Set the quiz type to "b" and select wrong answers from the same category with category "communication"
    let queryWrongChoices = { _id: { $ne: correctAnswer } };
    if (category === "alphabet" || category === "communication") {
      queryWrongChoices = {
        category: "communication",
      };
      quizType = "b";
      keys = items[i].signPhotos;
    } else {
      queryWrongChoices = {
        category: "vocabulary",
      };
      quizType = "a";
      keys = items[i].text;
    }

    const [wrongChoices] = await Promise.all([
      Item.aggregate([
        { $match: queryWrongChoices },
        { $sample: { size: 3 } },
        { $project: { _id: 1 } },
      ]),
    ]);

    const choices = [
      correctAnswer,
      ...wrongChoices.map((choice) => choice._id.toString()),
    ];

    // Shuffle the choices array using the Fisher-Yates shuffle algorithm
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    // Create the quiz object with the necessary properties, including the order number
    const quiz = new Quiz({
      quizType,
      orderNumber: i + 1, // increment the counter for each quiz
      choices,
      correctAnswer,
      keys,
      topic: quizTopic,
    });

    await quiz.save();

    quizzes.push(quiz); // add the quiz object to the quizzes array
  }

  return quizzes;
};

// ** grade test ** //
TestSchema.methods.gradeTest = async function (responses) {
  const quizIds = responses.map((response) => response.quizId);
  const quizzes = await Quiz.find({ _id: { $in: quizIds } })
    .lean()
    .exec();

  let score = 0;
  let total = 0;

  // Use a Map to quickly look up the correct answer for each quiz
  const correctAnswerMap = new Map();
  quizzes.forEach((quiz) => {
    correctAnswerMap.set(quiz._id.toString(), quiz.correctAnswer.toString());
    total++;
  });

  // Iterate through the user's responses and grade each one
  for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    let isCorrect = false;
    let userAnswer = null;
    if (response.answerId) {
      isCorrect = correctAnswerMap.get(response.quizId) === response.answerId;
      userAnswer = mongoose.Types.ObjectId(response.answerId);
    }

    // Update the quiz with the user's answer and correctness
    await Quiz.updateOne(
      { _id: response.quizId },
      { $set: { userAnswer: userAnswer, isCorrect: isCorrect } }
    ).exec();

    if (isCorrect) {
      score++;
    }
  }
  // Calculate the score as a percentage
  const percentage = Math.round((score / total) * 100);
  this.score = percentage;
  await this.save();
  return this.score;
};

module.exports = mongoose.models.Test || mongoose.model("Test", TestSchema);
