const FlashcardsCollection = require("../models/flashcardsCollection");
const asyncCatch = require("../utils/asyncCatch");

const User = require("../models/user");

// Get all collections for a user
exports.getAllCollections = asyncCatch(async (req, res, next) => {
  try {
    const collections = req.user.flashcardsCollections;
    res.status(200).json({
      status: "success",
      data: collections,
    });
  } catch (err) {
    next(err);
  }
});

// Get a collections by id
exports.getCollectionById = asyncCatch(async (req, res, next) => {
  try {
    const collection = await FlashcardsCollection.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: collection,
    });
  } catch (err) {
    next(err);
  }
});

// Add a new collection (and flashcards if given)
exports.addCollection = asyncCatch(async (req, res, next) => {
  try {
    const { title, description, flashcards } = req.body;
    const creator = req.user._id;
    const items = [];

    if (flashcards) {
      for (let i = 0; i < flashcards.length; i++) {
        items.push(flashcards[i]);
      }
    }

    const collection = await FlashcardsCollection.create({
      title,
      description,
      creator,
      items,
    });

    req.user.flashcardsCollections.push(collection._id);
    await req.user.save({ validateBeforeSave: false });

    res.status(201).json({ status: "success", data: collection });
  } catch (error) {
    next(error);
  }
});

// Add flashcard(s) to a collection
exports.addFlashcards = asyncCatch(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { flashcards } = req.body;
    const items = [];

    for (let i = 0; i < flashcards.length; i++) {
      items.push(flashcards[i]._id);
    }

    const collection = await FlashcardsCollection.findByIdAndUpdate(
      id,
      {
        $set: { updatedAt: Date.now() },
        $push: { items: { $each: items } },
      },
      { new: true }
    );

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(200).json({
      status: "success",
      data: collection,
    });
  } catch (error) {
    next(error);
  }
});

// Remove flashcard(s) from a collection
exports.removeFlashcards = asyncCatch(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { flashcards } = req.body;

    const items = [];
    for (let i = 0; i < flashcards.length; i++) {
      items.push(flashcards[i]._id);
    }

    const collection = await FlashcardsCollection.findByIdAndUpdate(
      id,
      { $pull: { items: { $in: items } }, $set: { updatedAt: Date.now() } },
      { new: true }
    );
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(200).json({
      status: "success",
      data: collection,
    });
  } catch (error) {
    next(error);
  }
});

// Remove a collection
exports.removeCollection = asyncCatch(async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await FlashcardsCollection.findByIdAndRemove(id);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    await User.updateOne(
      { _id: req.user._id },
      { $pull: { flashcardsCollections: id } }
    );
    res.status(200).json({ message: "Collection removed successfully" });
  } catch (error) {
    next(error);
  }
});