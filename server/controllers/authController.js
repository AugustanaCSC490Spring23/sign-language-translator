const { promisify } = require("util");
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
    role: req.body.role,
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

exports.routeGuard = asyncCatch(async (req, res, next) => {
  // get the token and validate
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    // check if token exists
    return next(new Err("Access blocked. You're not logged in.", 401));
  }

  const decodedData = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  // check user exists
  const tempUser = await User.findById(decodedData.id);
  if (!tempUser) {
    return next(new Err("Token no longer exists", 401));
  }

  // check if password changed after token issued
  if (tempUser.changePasswordAfterJWTIssued(decodedData.iat)) {
    return next(
      new Err("Password recently changed! Relog-in might solve", 401)
    );
  }
  // access granted
  req.user = tempUser;
  next();
});

exports.exclusiveAccess = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new Err("Access not granted for your role.", 403));
    }
    next();
  };
};
