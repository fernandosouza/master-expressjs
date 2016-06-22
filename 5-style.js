var express = require('express');
var path = require('path');
var app = new express();
var stylus = require('stylus');

var publicFolder = process.argv[3] || path.join(__dirname, 'public');
var port = process.argv[2] || 3000;

app.use(stylus.middleware(publicFolder));
app.use(express.static(publicFolder));

app.listen(port);