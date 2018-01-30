'use strict';
const express = require('express');

const data = require('./db/notes');

const { PORT } = require('./config');

console.log('hello world!');

const app = express();

app.use(express.static('public'));

app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
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
  console.log(foundID);
  res.json(foundID);
});