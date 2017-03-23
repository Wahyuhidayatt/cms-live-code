var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var cors = require('cors');


const users = require('./routes/users');
const articles = require('./routes/articles');

var app = express();

app.use(cors());
app.use(logger('dev'))
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/livewahyu');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/api/users', users )
app.use('/api/articles', articles )

module.exports = app
