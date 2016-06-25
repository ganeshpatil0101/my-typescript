/// <reference path="../lib//all.d.ts" />

import * as chai from 'chai';
import * as sinon from 'sinon';

import Person = require("../lib/Person");
let expect = chai.expect;

describe('Person test', ()=>{
  let per, config;

  beforeEach (() => {
    per = new Person("Ganesh");
  });
  afterEach(() => {
    per = null;
  });

  it ('Person should be defined', () => {
    expect(per).to.be.ok;
  });

  it('person getName should return string with name', () =>{
    expect(per.getName()).to.be.a('string');
    expect(per.getName()).to.equal('Ganesh');
  });


});
