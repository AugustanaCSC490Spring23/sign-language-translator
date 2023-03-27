const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const Err = require("./utils/customError");
const globalErrorHandler = require("./controllers/errorController");

const itemRouter = require("./routes/itemRoutes");
const userRouter = require("./routes/userRoutes");
const personalItemRouter = require("./routes/personalItemRoutes");

const app = express();

//// GLOBAL MIDDLEWARES
const limiter = rateLimit({
  // prevent too many request from the same IP
  max: 100,
  windowMs: 3600000,
  message: "Too many requests. Try again in an hour.",
});
app.use("/api", limiter); // only apply limiter to api routes
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

//// ROUTES

app.use("/api/v1/items", itemRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/personal", personalItemRouter);

app.all("*", (req, res, next) => {
  next(new Err(`Can't find ${req.originalUrl}!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
