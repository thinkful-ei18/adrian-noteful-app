'use strict';

const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

// GET Notes with search
notes.filter('investing', (err, list) => {
  if (err) {
    console.error(err);
  }
  console.log(list);
});

// GET Notes by ID
notes.find(1090, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('you tried to find the id of a note that doesn\'t exist');
  }
});

// PUT (Update) Notes by ID
const updateObj = {
  title: 'How To Unlock Your Swag',
  content: 'Get a cat!'
};

notes.update(1090, updateObj, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('you tried to update a note i can\'t find the note you\'re talking about');
  }
});