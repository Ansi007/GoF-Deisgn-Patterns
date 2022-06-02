"use strict";
exports.__esModule = true;
exports.NovelBuilder = void 0;
var Novel_1 = require("../Products/Novel");
var NovelBuilder = /** @class */ (function () {
    function NovelBuilder() {
        this.NewNovel();
    }
    NovelBuilder.prototype.NewNovel = function () {
        this.novel = new Novel_1.Novel();
    };
    NovelBuilder.prototype.BookCover = function () {
        this.novel.novel.push("Cover Added to Your Novel.");
    };
    NovelBuilder.prototype.BookForeWord = function () {
        this.novel.novel.push("ForeWord Added to Your Novel.");
    };
    NovelBuilder.prototype.BookContentList = function () {
        this.novel.novel.push("ContentList Added to Your Novel.");
    };
    NovelBuilder.prototype.BookChapters = function () {
        this.novel.novel.push("Chapters Added to Your Novel.");
    };
    NovelBuilder.prototype.BookIndex = function () {
        this.novel.novel.push("Index Added to Your Novel.");
    };
    NovelBuilder.prototype.BookPreface = function () {
        this.novel.novel.push("Preface Added to Your Novel.");
    };
    NovelBuilder.prototype.BookRefrences = function () {
        this.novel.novel.push("Refrences Added to Your Novel.");
    };
    NovelBuilder.prototype.getNovel = function () {
        var novel = this.novel;
        this.NewNovel();
        return novel;
    };
    return NovelBuilder;
}());
exports.NovelBuilder = NovelBuilder;
