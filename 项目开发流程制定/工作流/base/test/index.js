'use strict';
require('should');
const mylib = require('../src/js/index/test');

describe('My First Test', () => {
  it('should get "Hello Linshuizhaoying"', () => {
    mylib().should.be.eql('Hello Linshuizhaoying');
  });
});

describe('My First Test', () => {
  it('should not get "Hello Linshuizhaoying2"', () => {
    mylib().should.not.be.eql('Hello Linshuizhaoying2');
  });
});