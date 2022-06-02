"use strict";
exports.__esModule = true;
exports.DewaanBuilder = void 0;
var Dewaan_1 = require("../Products/Dewaan");
var DewaanBuilder = /** @class */ (function () {
    function DewaanBuilder() {
        this.NewDewaan();
    }
    DewaanBuilder.prototype.NewDewaan = function () {
        this.dewaan = new Dewaan_1.Dewaan();
    };
    DewaanBuilder.prototype.BookCover = function () {
        this.dewaan.dewaan.push("Cover Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.BookForeWord = function () {
        this.dewaan.dewaan.push("ForeWord Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.BookContentList = function () {
        this.dewaan.dewaan.push("ContentList Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.BookChapters = function () {
        this.dewaan.dewaan.push("Chapters Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.BookIndex = function () {
        this.dewaan.dewaan.push("Index Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.BookPreface = function () {
        this.dewaan.dewaan.push("Preface Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.BookRefrences = function () {
        this.dewaan.dewaan.push("Refrences Added to Your Dewaan.");
    };
    DewaanBuilder.prototype.getDewaan = function () {
        var dewaan = this.dewaan;
        this.NewDewaan();
        return dewaan;
    };
    return DewaanBuilder;
}());
exports.DewaanBuilder = DewaanBuilder;
