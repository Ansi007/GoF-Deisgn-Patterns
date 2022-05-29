"use strict";
exports.__esModule = true;
/*
The Client can produce a copy of any object that follows the prototype interface.
*/
var prototypeRegistry_1 = require("./prototypeRegistry");
function run() {
    var registry = new prototypeRegistry_1.PrototypeRegistry();
    var clones = registry.getClones();
    console.log("clones");
    console.log(clones);
}
run();
