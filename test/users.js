var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
const request = require('supertest');

describe(`GET all UUID's`, () => {
  it(`respond with all uuids`, done => {
    request(`http://localhost:9001/api`)
      .get(`/users`)
      .set('Accept', 'application/json')
      .expect('Content-Length', `37541`)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  }).timeout(500);
});
