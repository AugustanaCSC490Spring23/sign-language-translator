const Item = require("../models/item");
const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

/////////////////
exports.getAllPersonalItems = asyncCatch(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: "You're in a guarded route.",
  });
});
