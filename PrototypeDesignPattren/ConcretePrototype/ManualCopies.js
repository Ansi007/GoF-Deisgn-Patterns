"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Manual = void 0;
var Manual = /** @class */ (function () {
    function Manual() {
    }
    Manual.prototype.getName = function () {
        return this.Mname;
    };
    Manual.prototype.getVersionDetails = function () {
        return this.versionDetails;
    };
    Manual.prototype.getCopies = function () {
        return this.copies;
    };
    Manual.prototype.setName = function (name) {
        this.Mname = name;
    };
    Manual.prototype.setVersionDetails = function (versionDetails) {
        this.versionDetails = versionDetails;
    };
    Manual.prototype.setCopies = function (copies) {
        this.copies = copies;
    };
    Manual.prototype.clone = function () {
        var newCopy = Object.create(this);
        newCopy.versionDetails = this.versionDetails;
        newCopy.copies = {
            Copy: __assign({}, this)
        };
        return newCopy;
    };
    return Manual;
}());
exports.Manual = Manual;
