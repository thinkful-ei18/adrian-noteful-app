'use strict';

// We call this notes.router to signify it is being routed!

const express = require('express');
const notesRouter = express.Router();

const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

notesRouter.use(express.json());

notesRouter.get('/', (req, res, next) => {
  const { searchTerm } = req.query;

  notes.filter(searchTerm)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      return next(err);
    });

});

notesRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;

  notes.find(id)
    .then((item) => {
      res.json(item);
    })
    .catch ((err) => {
      return next(err);
    });

});

notesRouter.put('/:id', (req, res, next) => {
  const id = req.params.id;

  /***** Never trust users - validate input *****/
  const updateObj = {};
  const updateFields = ['title', 'content'];

  updateFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  notes.update(id, updateObj)
    .then((item) => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch((err) => {
      return next(err);
    });

});

notesRouter.post('/', (req, res, next) => {
  const { title, content } = req.body;
  const newItem = { title, content};
  // Validating the input
  if (!newItem.title) {
    const err = new Error('Missing `title` in request body');
    err.status = 400;
    return next(err);
  }

  notes.create(newItem, (err, item) => {
    if (err) {
      return next(err);
    }
    if (item) {
      res.location(`http://${req.headers.host}/notes/${item.id}`).status(201).json(item);
    }
  });
});

notesRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  notes.delete(id, (err, result) => {
    if (err) {
      return next(err);
    } if (result) {
      console.log(`Deleted a bookmark with the id \`${req.params.id}\`!`);
      res.status(204).end();
    } else {
      next();
    }
  });
});


module.exports = notesRouter;