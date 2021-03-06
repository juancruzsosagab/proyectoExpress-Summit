var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config()

var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();


// Enable All CORS Requests, i had a problem with request
app.use(cors())

// SecretKey for jwt
app.set('secretKey', "summit2022")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//jwt validation

const validateUser = (req, res, next) => {
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), (err, decoded) => {
    if (err) {
      res.json({ message: err.message })
    } else {
      console.log(decoded)
      req.body.tokenData = decoded;
      next()
    }
  })
}

//Disponibilizo en toda la app
app.validateUser = validateUser;

//routes
app.use('/users', validateUser, usersRouter);
app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  // modication of how is the error sent
  res.json({ code: err.code, msg: err.message });
});

module.exports = app;
