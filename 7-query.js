var express = require('express');
var app = new express();

app.get('/search', (req, res) => {
  res.send(req.query);
});

app.listen(process.argv[2] || 3000);