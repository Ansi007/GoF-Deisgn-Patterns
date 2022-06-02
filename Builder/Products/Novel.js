"use strict";
/*
Novel:
It is a product class. Products are resulting objects.
*/
exports.__esModule = true;
exports.Novel = void 0;
var Novel = /** @class */ (function () {
    function Novel() {
        this.novel = [];
    }
    Novel.prototype.DisplayNovel = function () {
        console.log("".concat(this.novel.join('\n'), "\n"));
    };
    return Novel;
}());
exports.Novel = Novel;
