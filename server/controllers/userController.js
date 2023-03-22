const User = require("../models/user");
const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

// MIDDLEWARES

//////////////
exports.getAllUsers = asyncCatch(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: users.length,
    data: { users: users },
  });
});

exports.getUser = asyncCatch(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });

  if (!user) {
    return next(new Err("No user found with given ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: { user: user },
  });
});

exports.createUser = asyncCatch(async (req, res, next) => {
  const user = new User(req.body);
  await user.save();
  res.status(200).json({
    status: "success",
    data: { user: user },
  });
});
