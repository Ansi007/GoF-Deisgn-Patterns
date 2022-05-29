/*
The Prototype Registry stores a set of pre-built objects that are ready to be copied.
*/
import { Prototype } from "./ProrotyeInterface";
import { Book } from "./ConcretePrototype/BookCopies";
import { Manual } from "./ConcretePrototype/ManualCopies";
import { CircularReference } from "./CircularRefrence";

export class PrototypeRegistry
{
   private collection : Prototype[] = [];

   constructor()
   {
      this.IntiallizeRepositry();
   }

   public getClones() : Prototype []
   {
      return this.collection;
   }
   public IntiallizeRepositry() : void
   {
      const bookClone : Book = new Book();
      const bookPrototype : Prototype = new Book();
      const bookRef : CircularReference = new CircularReference(bookPrototype);
      bookClone.setName("Novel");
      bookClone.setPublishDetails(
         {
            date:"17/07/2016",
            publisher:"Ilmi Books Center"
         }
      );
      bookClone.setCopies(bookRef);

      const manualClone : Manual = new Manual();
      const manualPrototype : Prototype = new Manual();
      const manualRef : CircularReference = new CircularReference(manualPrototype);
      manualClone.setName("Code Manual");
      manualClone.setVersionDetails(
         {
            versionNo:"1.0",
            productVersion:"1.2"
         }
      );
      manualClone.setCopies(manualRef);
      this.collection.push(bookClone);
      this.collection.push(manualClone);
   }
}
