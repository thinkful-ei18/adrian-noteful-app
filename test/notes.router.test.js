'use strict';

const app = require('../server');
const chai = require('chai');
const spy = require('chai-spies');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);
chai.use(spy);

describe('notesRouter', function () {

  it('GETs  the entire list of notes', function () {
    return chai.request(app)
      .get('/v1/notes')
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');

        expect(res.body.length).to.be.at.least(1);

        const expectedKeys = ['title', 'content'];
        res.body.forEach(function (note) {
          expect(note).to.be.a('object');
          expect(note).to.include.keys(expectedKeys);
        });
      });
  });

  it.only('returns a 404 error when given a bad path', function () {
    const spy = chai.spy();
    return chai.request(app)
      .get('/bad/path')
      .then(spy)
      .then(() => {
        expect(spy).to.not.have.been.called();
      })
      .catch(err => {
        expect(err.response).to.have.status(404);
      });
  });


  it('GETs a specific note', function () {
    const randomID = Math.floor(Math.random() * 10) + 1000;
    return chai.request(app)
      .get(`/v1/notes/${randomID}`)
      .then(function (res) {

        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');

        expect(res.body.id).to.deep.equal(randomID);
      });
  });

  // it('return an error for bad note ID that don\'t exist', function () {
  //   const randomID = Math.floor(Math.random() * 10) + 1015;
  //   return chai.request(app)
  //     .get(`/v1/notes/${randomID}`)
  //     .then(function (res) {
  //       expect(res).to.have.status(404);
  //     });
  // });


  it('modifies the `title` and `content` of a note', function () {
    const updatedNote = {
      title: 'How many cats does it take to change a lightbulb?',
      content: 'A whole litter *ba-dum tssss*'
    };

    const randomID = Math.floor(Math.random() * 10) + 1000;
    updatedNote.id = randomID;

    return chai.request(app)
      .put(`/v1/notes/${randomID}`)
      .send(updatedNote)
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal(updatedNote);
      });
  });

  it('creates a new item', function () {
    const newNote = {
      title: 'A new era for cats',
      content: 'A new day for catnip!'
    };

    return chai.request(app)
      .post('/v1/notes/')
      .send(newNote)
      .then(function (res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');

        expect(res.body.id).to.not.equal(null);
        expect(res.body).to.include.keys('title', 'content');

        expect(res.body).to.deep.equal(Object.assign(newNote, {id: res.body.id}));
      });
  });

  it('permanently deletes an item', function () {
    const randomID = Math.floor(Math.random() * 10) + 1000;

    return chai.request(app)
      .delete(`/v1/notes/${randomID}`)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });

});
