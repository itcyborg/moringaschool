var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const issuesRouter= require('./routes/issues')
const logsRouter= require('./routes/logs')
const projectRouter= require('./routes/projects')

var app = express();
var corsOptions = {
    origin: function (origin, callback) {
        // db.loadOrigins is an example call to load
        // a list of origins from a backing database
        db.loadOrigins(function (error, origins) {
            callback(error, origins)
        })
    }
}
cors(corsOptions)
app.options("*",cors())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/issue',issuesRouter);
app.use('/log',logsRouter);
app.use('/project',projectRouter);
module.exports = app;
