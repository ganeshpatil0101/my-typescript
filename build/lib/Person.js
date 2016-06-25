"use strict";
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.callbackTest = function (callback) {
        callback(true, "stringParam");
    };
    return Person;
}());
module.exports = Person;
//# sourceMappingURL=Person.js.map