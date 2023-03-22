const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncCatch = require("../utils/asyncCatch");
const Err = require("../utils/customError");

const generateSignedToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = asyncCatch(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = generateSignedToken(user._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
});

exports.login = asyncCatch(async (req, res, next) => {
  const { email, password } = req.body;

  // check email and password
  if (!email || !password) {
    return next(new Err("Please provide email and password", 400));
  }
  // check user exists and correct password
  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !(await user.validPassword(password, user.password))) {
    return next(new Err("Email or password not correct", 401));
  }

  // if pass, send token to client
  const token = generateSignedToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});
