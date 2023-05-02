const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  quizType: {
    type: String,
    enum: ["a", "b"],
    default: "a",
  },
  question: String,
  orderNumber: Number,
  choices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  correctAnswer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  userAnswer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  isCorrect: Boolean,
  topic: String, // specific topic
});

// MIDDLEWARES

// METHODS
// ** Grade quiz ** //
QuizSchema.methods.gradeQuiz = async function (userAnswer) {
  if (!userAnswer) {
    this.isCorrect = false; // If the user didn't answer, mark it as incorrect
    await this.save();
    return;
  }

  const correctAnswer = await this.populate("correctAnswer").then(
    (q) => q.correctAnswer
  );

  this.userAnswer = userAnswer;

  this.isCorrect = this.userAnswer.equals(correctAnswer._id);

  await this.save();
};

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
