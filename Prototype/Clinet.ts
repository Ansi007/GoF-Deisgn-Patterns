/*
The Client can produce a copy of any object that follows the prototype interface.
*/
/*
The Client can produce a copy of any object that follows the prototype interface.
*/
import { PrototypeRegistry }  from "./prototypeRegistry"
import { Prototype } from "./ProrotyeInterface";

 function run()
 {
   const registry : PrototypeRegistry = new PrototypeRegistry();
   const clones : Prototype [] = registry.getClones();
   console.log("Ready To Use clones in Registry!");
   console.log(clones);
 }

 run();
