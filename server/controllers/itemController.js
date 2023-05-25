const _ = require("lodash");

const Item = require("../models/item");

const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

// MIDDLEWARES

//////////////
// get ietms based on query
exports.getAllItems = asyncCatch(async (req, res, next) => {
  // make a copy of the real query to avoid making changes to the orginal
  let { ...fields } = { ...req.query };

  const filteredOutFields = ["sort"]; // exclude fields that can't be used for filtering
  const filteredFilters = _.omit(fields, filteredOutFields); // lodash helps filter the filteredOutFields out of fields

  // filtering with other logics: greater than, less than, ...
  let queryString = JSON.stringify(filteredFilters);
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
const arrayConverter = (res) => {
  let temp = res.replace(/[^a-zA-Z0-9 ]/g, "");
  let sentence = temp.split(" ");
  return sentence;
};
exports.getItemBySentence = asyncCatch(async (req, res, next) => {
  const item = await Item.findOne({ text: req.params.text });
  if (item) {
    res.status(200).json({
      status: "success",
      data: { item: [item] },
    });
  } else {
    const elements = arrayConverter(req.params.text);
    const promiseItems = elements.map(async (element) => {
      const item = await Item.findOne({ text: element });
      let temp = "";
      if (!item) {
        const notFoundElements = [...element];
        temp = notFoundElements.map(async (value) => {
          return await Item.findOne({ text: value });
        });
        return Promise.all(temp);
      } else {
        return item;
      }
    });
    Promise.all(promiseItems).then((values) => {
      res.status(200).json({
        status: "success",
        data: { item: values },
      });
    });
  }

  // return next(new Err('No word found', 404));
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
    {
      $sort: { _id: 1 }, // sort by _id field in ascending order
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      topics,
    },
  });
});

// GET ALPHABET
// return each letter in alphabet with items
exports.getAllLetters = asyncCatch(async (req, res, next) => {
  const letters = await Item.aggregate([
    {
      $group: {
        _id: "$firstLetter",
        count: { $sum: 1 },
        titles: { $push: "$text" },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      letters,
    },
  });
});

// fetch previous or next items

exports.getNextOrPreviousItem = asyncCatch(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { filter } = req.query;

    const currentItem = await Item.findById(id);
    if (!currentItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    let nextItem, previousItem;

    if (filter === "topic") {
      nextItem = await Item.findOne({
        _id: { $gt: currentItem._id },
        topic: currentItem.topic,
      }).sort({ _id: 1 });
      previousItem = await Item.findOne({
        _id: { $lt: currentItem._id },
        topic: currentItem.topic,
      }).sort({ _id: -1 });
    } else if (filter === "firstLetter") {
      nextItem = await Item.findOne({
        _id: { $gt: currentItem._id },
        firstLetter: currentItem.firstLetter,
      }).sort({ _id: 1 });
      previousItem = await Item.findOne({
        _id: { $lt: currentItem._id },
        firstLetter: currentItem.firstLetter,
      }).sort({ _id: -1 });
    }

    res
      .status(200)
      .json({ status: "success", data: { nextItem, previousItem } });
  } catch (error) {
    next(error);
  }
});
