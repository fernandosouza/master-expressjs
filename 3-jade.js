var express = require('express');
var path = require('path');
var app = new express();

app.set('views', path.join(__dirname, process.argv[3] || 'templates'));
app.set('view engine', 'jade');

app.get('/home', (req, res) => {
  res.render('index', {
    date: new Date().toDateString()
  });
});

app.listen(process.argv[2] || 3000);