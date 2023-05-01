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
  isCorrect: {
    type: Boolean,
    default: false,
  },
  topic: String, // specific topic
});

// MIDDLEWARES
// populate items
QuizSchema.pre("save", async function (next) {
  next();
});

QuizSchema.index({ orderNumber: 1, isCorrect: 1 });

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
