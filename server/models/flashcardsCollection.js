const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

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
  slug: {
    type: String,
    unique: true,
    index: true,
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

// MIDDLEWARES
FlashcardsCollectionSchema.pre("save", async function (next) {
  const collection = this;

  if (!collection.isModified("title") && !collection.isNew) {
    return next();
  }

  const slugBase = slugify(collection.title, { lower: true });
  const now = Date.now();
  const suffix = now.toString(36);

  // Combine the slug base and timestamp suffix to create a unique slug
  const slug = `${slugBase}-${suffix}`;

  // Check if the slug is already taken
  const existingCollection = await mongoose.models.FlashcardsCollection.findOne(
    {
      slug: slug,
    }
  );

  if (existingCollection) {
    // If the slug is taken, generate a new suffix and try again
    return this.pre("save", next.bind(this));
  }

  // If the slug is available, use it
  collection.slug = slug;
  next();
});

FlashcardsCollectionSchema.index({ slug: 1, createdAt: 1, updatedAt: 1 });

module.exports =
  mongoose.models.FlashcardsCollection ||
  mongoose.model("FlashcardsCollection", FlashcardsCollectionSchema);
