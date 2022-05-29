/*
The Client can produce a copy of any object that follows the prototype interface.
*/
import { PrototypeRegistry }  from "./prototypeRegistry"
import { Prototype } from "./ProrotyeInterface";

 function run()
 {
   const registry : PrototypeRegistry = new PrototypeRegistry();
   const clones : Prototype [] = registry.getClones();
   console.log("clones");
   console.log(clones);
 }

 run();
