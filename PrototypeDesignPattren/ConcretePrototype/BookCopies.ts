/*
This is Concrete Prototype that implements the cloning method.
*/
import {Prototype} from "../ProrotyeInterface"
import { CircularReference } from "../CircularRefrence"

export class Book implements Prototype
{

   public name : string;
   public publishDetails : object;
   public copies : CircularReference;

   public getName(): string
   {
      return this.name;
   }

   public getPublishDetails() : object
   {
      return this.publishDetails;
   }

   public getCopies():CircularReference
   {
      return this.copies;
   }

   public setName(name:string)
   {
      this.name = name;
   }

   public setPublishDetails(publishDetails:object)
   {
      this.publishDetails = publishDetails;
   }

   public setCopies(copies:CircularReference)
   {
      this.copies = copies;
   }

   public clone():this
   {
      const newCopy = Object.create(this);
      newCopy.publishDetails = {...this.publishDetails};
      newCopy.copies = {
         Copy : {...this},
      };
      return newCopy;
   }
}
