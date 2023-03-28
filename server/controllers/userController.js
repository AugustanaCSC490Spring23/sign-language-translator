const User = require("../models/user");
const Err = require("../utils/customError");
const asyncCatch = require("../utils/asyncCatch");

// MIDDLEWARES

// helpers
const filteredBody = (obj, ...fields) => {
  const filteredObj = {};
  Object.keys(obj).forEach((field) => {
    if (fields.includes(field)) filteredObj[field] = obj[field];
  });
  return filteredObj;
};

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

exports.updateUserSelf = async (req, res, next) => {
  // if user wants to change password, error
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new Err("Can't update password here. Navigate to /updatePassword", 400)
    );
  }
  // update user info
  const body = filteredBody(req.body, "name", "email"); // filter unallowed fields
  const user = await User.findByIdAndUpdate(req.user.id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.deleteSelf = asyncCatch(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, {
    active: false,
  });
  res.status(204).json({
    status: "success",
    data: null,
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
