"use strict";
/*
Dewaan:
It is a product class. Products are resulting objects.
*/
exports.__esModule = true;
exports.Dewaan = void 0;
var Dewaan = /** @class */ (function () {
    function Dewaan() {
        this.dewaan = [];
    }
    Dewaan.prototype.DisplayDewaan = function () {
        console.log("".concat(this.dewaan.join('\n'), "\n"));
    };
    return Dewaan;
}());
exports.Dewaan = Dewaan;
