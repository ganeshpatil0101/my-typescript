"use strict";
var chai = require('chai');
var sinon = require('sinon');
var Person = require("../lib/Person");
var expect = chai.expect;
describe('Person test', function () {
    var per;
    beforeEach(function () {
        per = new Person("Ganesh");
    });
    afterEach(function () {
        per = null;
    });
    it('Person should be defined', function () {
        expect(per).to.be.ok;
    });
    it('person getName should return string with name', function () {
        expect(per.getName()).to.be.a('string');
        expect(per.getName()).to.equal('Ganesh');
    });
});
describe('Person with callback test ', function () {
    var per;
    beforeEach(function () {
        per = new Person("Ganesh");
    });
    afterEach(function () {
        per = null;
    });
    it('callback should called', function () {
        var callback = sinon.spy();
        per.callbackTest(callback);
        expect(callback.called).to.be.true;
        expect(callback.calledWith(true, "stringParam")).to.be.true;
    });
});
//# sourceMappingURL=PersonTest.js.map