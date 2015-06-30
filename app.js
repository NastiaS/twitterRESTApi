var express = require('express');
var app = express();
var path = require('path');


var favicon = require('serve-favicon');
var logger = require('morgan');

var bowerPath = path.join(__dirname, 'bower_components');
var publicPath = path.join(__dirname, 'public');

app.use(express.static(bowerPath));
app.use(express.static(publicPath));
app.use(logger('dev'));


app.use('/', require('./routes/index'));
app.use('/twitter/', require('./routes/tweets'));

app.listen(1234);
console.log("heyo! I am listening on port 1234");