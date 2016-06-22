var express = require('express');
var app = new express();
var crypto = require('crypto');

function getSHA1Hash(including) {
  var hash = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + including)
    .digest('hex');

  return hash;
}

app.param('id', (req, res, next, id) => {
  req.id = id;

  next();
});

app.put('/message/:id', (req, res) => {
  var hash = getSHA1Hash(req.id);

  res.send(hash);
});

app.listen(process.argv[2] || 3000);