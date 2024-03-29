const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  flashcardsCollections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FlashcardsCollection",
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
  avatar: String,
  password: {
    type: String,
    required: [true, "Provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Confirm your password"],
    validate: {
      // this only works on CREATE and SAVE
      validator: function (cPassword) {
        return cPassword === this.password;
      },
      message: "Confirm password incorrect",
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  tests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
    },
  ],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
});

//// MIDDLEWARES
// change password
UserSchema.pre("save", async function (next) {
  // This function only runs if password was actually modified
  if (!this.isModified("password")) return next();
  // Has the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// set password change time back for 1s
// this is neccessary as token validation takes password change time into account
// knowing that password change time usually takes longer due to hashing and salting
// setting back its time for 1s helps
UserSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// filter out inactive users
UserSchema.pre(/^find/, function (next) {
  // we use regex for this as we may want to access every find functions that touch inactive users
  this.find({ active: { $ne: false } });
  // set active field to false instead of choosing active users is essential
  // as not all users are created with an 'active' field
  next();
});

///// METHODS
// check if password correct
UserSchema.methods.validPassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

// check if password is change after jwt is issued to user
UserSchema.methods.changePasswordAfterJWTIssued = function (jwtTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtTimestamp < changedTimestamp;
  }
};

// generate random reset password token
UserSchema.methods.generatePasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256") // create hash object
    .update(token) // feed unique token in the hash so that the output is unique and unpredictable
    .digest("hex"); // finalize the hash in the form of a hex

  this.passwordResetTokenExpires = Date.now() + 120000;

  return token;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
