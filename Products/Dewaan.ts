/*
Dewaan:
It is a product class. Products are resulting objects.
*/

export class Dewaan{

   public dewaan : string[] = [];

   public DisplayDewaan():void
   {
      console.log(`Dewaan Contains following\n ${this.dewaan.join('\n')}\n`);
   }
}
