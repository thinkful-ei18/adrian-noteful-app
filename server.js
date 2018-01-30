'use strict';
const express = require('express');

const data = require('./db/notes');

const { PORT } = require('./config');

const { requestLogger } = require('./requestLogger');

const { simDB } = require('./db/simDB');

console.log('hello world!');

const app = express();

app.use(express.static('public'));

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

app.use(requestLogger);

app.get('/boom', (req, res, next) => {
  throw new Error('Boom!!');
});

app.get('/v1/notes', (req, res) => {
  const {searchTerm} = req.query;
  // Loop through each item in the array
  if (!searchTerm) {
    res.json(data);
  } else {
    let filteredData = data.filter(item => item.title.includes(searchTerm));
    res.json(filteredData);
  }
});

app.get('/v1/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const foundID = data.find(item => item.id === id);
  // console.log(foundID);
  res.json(foundID);
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).json({ message: 'You got 404 problems but this page ain\'t one because it isn\'t real!' });
});
