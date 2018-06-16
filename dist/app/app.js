'use strict';

var express = require('express');
var app = express();
var greeter = require('./greeter.js');
app.get('/', function (req, res) {
          res.send(greeter());
});
app.listen(process.env.PORT || 3000, function () {
          console.log('port is up');
});