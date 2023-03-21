const Item = require("../models/itemModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// MIDDLEWARES

//////////////
exports.getAllItems = catchAsync(async (req, res, next) => {
  const items = await Item.find({});
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: items.length,
    data: { items: items },
  });
});

exports.getItem = catchAsync(async (req, res, next) => {
  const item = await Item.findOne({ text: req.params.text });

  if (!item) {
    return next(new AppError('No item found with given ID', 404));
  }

  res.status(200).json({
    status: "success",
    data: { item: item },
  });
});

exports.createItem = catchAsync(async (req, res, next) => {
  const item = new Item(req.body);
  await item.save();
  res.status(200).json({
    status: "success",
    data: { item: item },
  });
});
