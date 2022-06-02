"use strict";
exports.__esModule = true;
exports.NovelDirector = void 0;
var NovelDirector = /** @class */ (function () {
    function NovelDirector() {
    }
    NovelDirector.prototype.setBuilder = function (_builder) {
        this.builder = _builder;
    };
    /*
    We Can construct several variations of novels using our director.
    */
    NovelDirector.prototype.TraditionalNovelBooklet = function () {
        this.builder.BookCover();
        this.builder.BookContentList();
        this.builder.BookChapters();
    };
    NovelDirector.prototype.ModrenNovelBooklet = function () {
        this.builder.BookCover();
        this.builder.BookForeWord();
        this.builder.BookPreface();
        this.builder.BookContentList();
        this.builder.BookChapters();
        this.builder.BookIndex();
        this.builder.BookRefrences();
    };
    return NovelDirector;
}());
exports.NovelDirector = NovelDirector;
