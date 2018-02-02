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
});