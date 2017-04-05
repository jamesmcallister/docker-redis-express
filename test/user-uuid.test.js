var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
const request = require('supertest');

describe(`GET Users details with UUID`, () => {
  const uuid = `0c633edf-8c53-469f-9144-3e5367c95b00`;
  it('respond with users data', done => {
    request('http://localhost:9001/api')
      .get(`/users/${uuid}`)
      .set('Accept', 'application/json')
      .expect('Content-Length', `336`)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  }).timeout(500);
});
