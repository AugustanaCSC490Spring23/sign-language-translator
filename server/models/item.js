const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  text: {
    type: String,
    required: [true, "Text is required for items."],
    unique: true,
    trim: true,
  },
  topic: {
    type: String,
    required: [true, "Text must belong to a topic."],
  },
  category: {
    type: String,
    enum: ["vocabulary", "communication", "letter"],
    default: "vocabulary",
  },
  firstLetter: {
    type: String,
    required: [true, "Must declare a first letter for each text."],
  },
  difficulty: {
    type: Number,
    default: 1,
    min: [1, "Difficulty must be above or equal to 1.0 (easy)"],
    max: [3, "Difficulty must be below or equal to 3.0 (hard)"],
  },
  signPhotos: Array,
  meaningPhoto: String,
});

ItemSchema.index({ difficulty: 1, firstLetter: 1 });

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);
