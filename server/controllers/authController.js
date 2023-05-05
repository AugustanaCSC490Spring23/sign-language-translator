const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const Err = require("../utils/customError");
const EmailSender = require("../utils/emailSender");
const asyncCatch = require("../utils/asyncCatch");

const generateSignedToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = generateSignedToken(user._id);
  // only set cookie when in production mode
  if (process.env.NODE_ENV === "production") {
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      // secure: true,
      sameSite: "strict",
    };
    res.cookie("jwt", token, cookieOptions);
  }

  // remove password from output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    data: {
      user,
      token,
    },
  });
};

exports.signup = asyncCatch(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const url = `${req.protocol}://${req.get("host")}/learning`;
  await new EmailSender(user, url).sendWelcomeEmail();
  sendToken(user, 201, req, res);
});

exports.login = asyncCatch(async (req, res, next) => {
  const { email, password } = req.body;

  // check email and password
  if (!email || !password) {
    return next(new Err("Please provide email and password", 400));
  }
  // check user exists and correct password
  const user = await User.findOne({ email: email })
    .select("+password")
    .populate("flashcardsCollections")
    .populate("tests");

  if (!user || !(await user.validPassword(password, user.password))) {
    return next(new Err("Email or password not correct", 401));
  }
  const userWithoutPassword = { ...user.toObject(), password: undefined }; // remove password from user object
  // if pass, send token to client
  const token = generateSignedToken(user._id);
  res.status(200).json({
    status: "success",
    data: {
      token,
      user: userWithoutPassword,
    },
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
    return next(
      new Err("401 Unauthorized: Access blocked. You're not logged in.", 401)
    );
  }

  const decodedData = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  // check user exists
  const tempUser = await User.findById(decodedData.id);
  if (!tempUser) {
    return next(new Err("401 Unauthorized: Token no longer exists", 401));
  }

  // check if password changed after token issued
  if (tempUser.changePasswordAfterJWTIssued(decodedData.iat)) {
    return next(
      new Err(
        "401 Unauthorized: Password recently changed! Relog-in might solve",
        401
      )
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

exports.forgotPassword = async (req, res, next) => {
  // get and check if user exists
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new Err("No user with provided email is found.", 404));
  }

  // generate reset token
  const token = user.generatePasswordResetToken();
  await user.save({ validateBeforeSave: false }); // this helps prevent validators requiring full info of a user for reseting password

  try {
    // send token to user's email
    const resetEmailURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${token}`;
    await new EmailSender(user, resetEmailURL).sendResetPasswordEmail();
    res.status(200).json({
      status: "success",
      message: "Token sent to specified email",
    });
  } catch (err) {
    console.log(err);
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new Err("Error sending email.", 500));
  }
};

exports.resetPassword = async (req, res, next) => {
  // get user by token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() },
  });

  // check if token not expired + user exists, set new password
  if (!user) {
    return next(new Err("Token invalid or expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  await user.save();

  // update passwordChangedAt

  // log user in, send jwt
  sendToken(user, 200, req, res);
};

exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  if (!(await user.validPassword(req.body.currentPassword, user.password))) {
    return next(new Err("Wrong current password.", 401));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  sendToken(user, 201, req, res);
};
