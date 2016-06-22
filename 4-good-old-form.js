var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = new express();

var publicFolder = process.argv[3] || path.join(__dirname, 'public');
var port = process.argv[2] || 3000;

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''));
});

app.use(express.static(publicFolder));
app.listen(port);