"use strict";
exports.__esModule = true;
exports.PrototypeRegistry = void 0;
var BookCopies_1 = require("./ConcretePrototype/BookCopies");
var ManualCopies_1 = require("./ConcretePrototype/ManualCopies");
var CircularRefrence_1 = require("./CircularRefrence");
var PrototypeRegistry = /** @class */ (function () {
    function PrototypeRegistry() {
        this.collection = [];
        this.IntiallizeRepositry();
    }
    PrototypeRegistry.prototype.getClones = function () {
        return this.collection;
    };
    PrototypeRegistry.prototype.IntiallizeRepositry = function () {
        var bookClone = new BookCopies_1.Book();
        var bookPrototype = new BookCopies_1.Book();
        var bookRef = new CircularRefrence_1.CircularReference(bookPrototype);
        bookClone.setName("Novel");
        bookClone.setPublishDetails({
            date: "17/07/2016",
            publisher: "Ilmi Books Center"
        });
        bookClone.setCopies(bookRef);
        var manualClone = new ManualCopies_1.Manual();
        var manualPrototype = new ManualCopies_1.Manual();
        var manualRef = new CircularRefrence_1.CircularReference(manualPrototype);
        manualClone.setName("Code Manual");
        manualClone.setVersionDetails({
            versionNo: "1.0",
            productVersion: "1.2"
        });
        manualClone.setCopies(manualRef);
        this.collection.push(bookClone);
        this.collection.push(manualClone);
    };
    return PrototypeRegistry;
}());
exports.PrototypeRegistry = PrototypeRegistry;
