"use strict";
var chai = require('chai');
var Person = require("../lib/Person");
var expect = chai.expect;
describe('Person test', function () {
    var per, config;
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
//# sourceMappingURL=PersonTest.js.map