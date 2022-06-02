/*
This is Concrete Prototype that implements the cloning method.
*/
import {Prototype} from "../ProrotyeInterface"
import { CircularReference } from "../CircularRefrence"

export class Manual implements Prototype
{

   public Mname : string;
   public versionDetails : object;
   public copies : CircularReference;

   public getName(): string
   {
      return this.Mname;
   }

   public getVersionDetails() : object
   {
      return this.versionDetails;
   }

   public getCopies():CircularReference
   {
      return this.copies;
   }

   public setName(name:string)
   {
      this.Mname = name;
   }

   public setVersionDetails(versionDetails:object)
   {
      this.versionDetails = versionDetails;
   }

   public setCopies(copies:CircularReference)
   {
      this.copies = copies;
   }

   public clone():this
   {
      const newCopy = Object.create(this);
      newCopy.versionDetails = {...this.versionDetails};
      newCopy.copies = {
         Copy : {...this},
      };
      return newCopy;
   }
}
