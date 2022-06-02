/*
Novel:
It is a product class. Products are resulting objects.
*/

export class Novel{

   public novel : string[] = [];

   public DisplayNovel():void
   {
      console.log(`${this.novel.join('\n')}\n`);
   }
}

