"use strict";
exports.__esModule = true;
/*
The Client can produce a copy of any object that follows the prototype interface.
*/
var CircularRefrence_1 = require("./CircularRefrence");
var BookCopies_1 = require("./ConcretePrototype/BookCopies");
var book = new BookCopies_1.Book();
book.setName("Namal");
book.setPublishDetails({
    Date: "28/02/2022",
    publisher: "urdu book depot"
});
book.setCopies(new CircularRefrence_1.CircularReference(book));
var cloned = book.clone();
if (book.name === cloned.name)
    console.log("Name cloned!");
else
    console.log("Failed to clone name");
if (book.publishDetails !== cloned.publishDetails)
    console.log("Details cloned!");
else
    console.log("Failed to clone details");
if (book.copies !== cloned.copies)
    console.log("Copies cloned!");
else
    console.log("Failed to clone copies");
