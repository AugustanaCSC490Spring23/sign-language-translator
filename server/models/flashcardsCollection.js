const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashcardsCollectionSchema = new Schema({
  title: String,
  description: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

FlashcardsCollectionSchema.index({ title: 1, createdAt: 1, updatedAt: 1 });

module.exports =
  mongoose.models.FlashcardsCollection ||
  mongoose.model("FlashcardsCollection", FlashcardsCollectionSchema);
