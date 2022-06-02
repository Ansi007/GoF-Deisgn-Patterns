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
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.getPublishDetails = function () {
        return this.publishDetails;
    };
    Book.prototype.getCopies = function () {
        return this.copies;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.setPublishDetails = function (publishDetails) {
        this.publishDetails = publishDetails;
    };
    Book.prototype.setCopies = function (copies) {
        this.copies = copies;
    };
    Book.prototype.clone = function () {
        var newCopy = Object.create(this);
        newCopy.publishDetails = __assign({}, this.publishDetails);
        newCopy.copies = {
            Copy: __assign({}, this)
        };
        return newCopy;
    };
    return Book;
}());
exports.Book = Book;
