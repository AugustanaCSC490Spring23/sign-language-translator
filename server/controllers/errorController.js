const Err = require("../utils/customError");

const sendDevErr = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendProdErr = (err, res) => {
  if (err.isOperational) {
    // Trusted error, easy to read so just send it to client
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming or unknown error, just send simple details to client, these errors may come from 3rd party: Mongoose...
    // console.log("!!!Error!!!:", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new Err(message, 400);
};

const handleDuplicateFieldDB = (err) => {
  const message = `Duplicate field value: ${err.keyValue.email}.`;
  return new Err(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((e) => e.message);
  const message = `Invalid data. ${errors.join(". ")}`;
  return new Err(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendDevErr(err, res);
  } else {
    let error = { ...err };
    if (error.kind === "ObjectId") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldDB(error);
    if (error._message === "User validation failed")
      error = handleValidationErrorDB(error);

    sendProdErr(error, res);
  }
};
