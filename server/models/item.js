const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  text: {
    type: String,
    required: [true, "Text is required for items."],
    unique: true,
    trim: true,
  },
  category: String,
  difficulty: {
    type: Number,
    default: 1,
    min: [1, "Difficulty must be above or equal to 1.0 (easy)"],
    max: [3, "Difficulty must be below or equal to 3.0 (hard)"],
  },
  signPhotos: [String],
  meaningPhoto: String
});

ItemSchema.index({ difficulty: 1 });

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);
