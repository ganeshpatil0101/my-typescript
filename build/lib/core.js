"use strict";
var MyLibrary = (function () {
    function MyLibrary(config) {
        if (config === void 0) { config = {
            name: 'Bob'
        }; }
        this.config = config;
        this.computedName = this.config.name + ' Moran';
    }
    Object.defineProperty(MyLibrary.prototype, "name", {
        get: function () {
            return this.computedName;
        },
        enumerable: true,
        configurable: true
    });
    return MyLibrary;
}());
exports.MyLibrary = MyLibrary;
//# sourceMappingURL=core.js.map