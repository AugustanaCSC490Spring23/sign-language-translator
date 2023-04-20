const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const sanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');

const Err = require('./utils/customError');
const globalErrorHandler = require('./controllers/errorController');

const itemRouter = require('./routes/itemRoutes');
const userRouter = require('./routes/userRoutes');
const personalItemRouter = require('./routes/personalItemRoutes');

const app = express();

app.use(cookieParser());
app.enable('trust proxy');

//// GLOBAL MIDDLEWARES

// security HTTP headers
app.use(helmet());

// allow json
app.use(express.json({ limit: '10kb' }));
app.use(express.static(`${__dirname}/public`));

// nosql query injection prevention !!DANGEROUS MALICIOUS HACKING METHOD
// more info: https://www.imperva.com/learn/application-security/nosql-injection/
app.use(sanitizer());

// data sanitization
app.use(xss());

// prevent too many request from the same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 3600000,
  message: 'Too many requests. Try again in an hour.',
});
app.use('/api', limiter); // only apply limiter to api routes

// allow cors
app.use(cors());

// other middlewares
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

//// ROUTES

app.use('/api/v1/items', itemRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/personal', personalItemRouter);

app.all('*', (req, res, next) => {
  next(new Err(`Can't find ${req.originalUrl}!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
