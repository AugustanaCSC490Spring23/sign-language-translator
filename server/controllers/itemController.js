const Item = require("../models/item");

const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

// MIDDLEWARES

//////////////
// get ietms based on query
exports.getAllItems = asyncCatch(async (req, res, next) => {
  // make a copy of the real query to avoid making changes to the orginal
  const query = { ...req.query };

  // declare excluded fields such as 'page', 'sort', ...
  const filertedOutFields = ["page"];
  filertedOutFields.forEach((field) => delete query[field]);

  // filtering with other logics: greater than, less than, ...
  let queryString = JSON.stringify(query);
  queryString = queryString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (match) => `$${match}`
  );

  const items = await Item.find(JSON.parse(queryString));
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    count: items.length,
    data: { items: items },
  });
});

exports.getItemByText = asyncCatch(async (req, res, next) => {
  const item = await Item.findOne({ text: req.params.text });

  if (!item) {
    return next(new Err("No word found", 404));
  }

  res.status(200).json({
    status: "success",
    data: { item: item },
  });
});

exports.createItem = asyncCatch(async (req, res, next) => {
  const item = new Item(req.body);
  await item.save();
  res.status(200).json({
    status: "success",
    data: { item: item },
  });
});

// GET TOPICS
// return all topics with items (words)
exports.getAllTopics = asyncCatch(async (req, res, next) => {
  const topics = await Item.aggregate([
    {
      $group: {
        _id: "$topic",
        count: { $sum: 1 },
        titles: { $push: "$text" },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      topics: topics,
    },
  });
});
// get all items in given topic
exports.getItemsByTopic = asyncCatch(async (req, res, next) => {});
