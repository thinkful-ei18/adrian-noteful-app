'use strict';

// We call this notes.router to signify it is being routed!

const express = require('express');
const notesRouter = express.Router();

const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

notesRouter.get('/', (req, res, next) => {
  const { searchTerm } = req.query;

  notes.filter(searchTerm, (err, list) => {
    if (err) {
      return next(err);
    }
    res.json(list);
  });
});

module.exports = notesRouter;