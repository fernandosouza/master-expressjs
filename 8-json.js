'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var app = new express();

var filePath = process.argv[3] || path.join(__dirname, 'books.json');

app.get('/books', (req, res) => {
  fs.readFile(filePath, (e, data) => {
    let books;

    if (e) {
      res.sendStatus(500);
    }

    try {
      books = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }

    res.send(books);
  });
});

app.listen(process.argv[2] || 3000);