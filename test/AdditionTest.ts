/// <reference path="../typings/index.d.ts" />
import * as chai from 'chai';
import * as sinon from 'sinon';
import Addition = require("../lib/Addition");

let expect = chai.expect;

describe('Addition test',()=>{
  it('Addition should be defined',()=>{
      expect(Addition).to.be.ok;
  });

  it('Addition should be string ', ()=>{
    let sAdd = new Addition<string>();
    sAdd.sum = (a, b) =>{
      return a +" " +b;
    }

    expect(sAdd.sum("Ganesh", "Patil")).to.be.a('string');
    expect(sAdd.sum("Ganesh", "Patil")).to.equal('Ganesh Patil');
  });

  it('Addition should be number', ()=>{
    let nAdd = new Addition<number>();
    nAdd.sum = (a, b) =>{
      return a+b;
    }

    expect(nAdd.sum(10,20)).to.be.a('number');
    expect(nAdd.sum(10,20)).to.equal(30);
  });

})
