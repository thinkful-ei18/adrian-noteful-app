'use strict';

const app = require('../server');
const chai = require('chai');
const spy = require('chai-spies');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);
chai.use(spy);

describe('notesRouter', function () {

  it('should GET the entire list of notes', function () {
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

  it('should GET a specific note', function () {
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
});

it('should modify the `title` and `content` of a note', function () {
  const testNote = {
    title: 'How many cats does it take to change a lightbulb?',
    content: 'A whole litter *ba-dum tssss*'
  };

  const randomID = Math.floor(Math.random() * 10) + 1000;
  testNote.id = randomID;

  return chai.request(app)
    .put(`/v1/notes/${randomID}`)
    .send(testNote)
    .then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('object');
      expect(res.body).to.deep.equal(testNote);
    });
});




