const Item = require("../models/item");

const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

// MIDDLEWARES

//////////////
exports.getAllItems = asyncCatch(async (req, res, next) => {
  const items = await Item.find({});
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: items.length,
    data: { items: items },
  });
});

exports.getItem = asyncCatch(async (req, res, next) => {
  const item = await Item.findOne({ text: req.params.text });

  if (!item) {
    return next(new Err('No item found with given ID', 404));
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
