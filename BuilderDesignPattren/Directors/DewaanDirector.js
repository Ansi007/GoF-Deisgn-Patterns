"use strict";
exports.__esModule = true;
exports.DewaanDirector = void 0;
var DewaanDirector = /** @class */ (function () {
    function DewaanDirector() {
    }
    DewaanDirector.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    /*
    We Can construct several variations of Dewaans using our director.
    */
    DewaanDirector.prototype.TraditionalDewaanBooklet = function () {
        this.builder.BookCover();
        this.builder.BookContentList();
        this.builder.BookChapters();
    };
    DewaanDirector.prototype.ModrenDewaanBooklet = function () {
        this.builder.BookCover();
        this.builder.BookForeWord();
        this.builder.BookPreface();
        this.builder.BookContentList();
        this.builder.BookChapters();
        this.builder.BookIndex();
        this.builder.BookRefrences();
    };
    return DewaanDirector;
}());
exports.DewaanDirector = DewaanDirector;
