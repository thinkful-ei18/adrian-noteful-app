'use strict';

const app = require('../server');
const chai = require('chai');
const spy = require('chai-spies');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);
chai.use(spy);

// describe('Reality check', function () {

//   it('true should be true', function () {
//     expect(true).to.be.true;
//   });

//   it('2 + 2 should equal 4', function () {
//     expect(2 + 2).to.equal(4);
//   });

// });

