const express = require("express");
const cors = require("cors");

const Err = require('./utils/customError');
const globalErrorHandler = require('./controllers/errorController');

const itemRouter = require('./routes/itemRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/items', itemRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    next(new Err(`Can't find ${req.originalUrl}!`, 404));
})

app.use(globalErrorHandler);

module.exports = app;
