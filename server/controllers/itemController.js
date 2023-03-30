const Item = require("../models/item");

const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

// MIDDLEWARES

//////////////
// get ietms based on query
exports.getAllItems = asyncCatch(async (req, res, next) => {
  // make a copy of the real query to avoid making changes to the orginal
  let queryCopy = { ...req.query };

  // declare excluded fields such as 'page', 'sort', ...
  const filertedOutFields = ["page", "sort"]; // this is essential as the first step is to filter, so we can't include other type of query
  filertedOutFields.forEach((field) => delete queryCopy[field]);

  // filtering with other logics: greater than, less than, ...
  let queryString = JSON.stringify(queryCopy);
  queryString = queryString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (expression) => `$${expression}`
  );

  let data = Item.find(JSON.parse(queryString));

  // now sort the data after filter
  if (req.query.sort) {
    const sortQuery = req.query.sort.split(",").join(" ");
    data = data.sort(sortQuery);
  }


  const items = await data;
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
