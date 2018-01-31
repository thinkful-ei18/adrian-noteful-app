'use strict';

const data = require('./db/notes');
const simDB = require('./db/simDB');
const notes = simDB.initialize(data);

const { PORT } = require('./config');

const express = require('express');
const morgan = require('morgan');

const app = express();
const notesRouter = require('./router/notes.router');

console.log('hello world!');

app.use(morgan('dev'));
app.use('/v1/notes', notesRouter);

app.use(express.static('public'));
app.use(express.json());

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

app.get('/v1/notes/:id', (req, res, next) => {
  const id = req.params.id;
  notes.find(id, (err, item) => {
    if (err) {
      return next(err);
    }
    if (item) {
      res.json(item);
    }
  });
});

app.put('/v1/notes/:id', (req, res, next) => {
  const id = req.params.id;

  /***** Never trust users - validate input *****/
  const updateObj = {};
  const updateFields = ['title', 'content'];

  updateFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  notes.update(id, updateObj, (err, item) => {
    if (err) {
      return next(err);
    }
    if (item) {
      res.json(item);
    } else {
      next();
    }
  });
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).json({ message: 'You got 404 problems but this page ain\'t one because it isn\'t real!' });
});
