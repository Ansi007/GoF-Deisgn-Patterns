/*
The Director class::-
It defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
*/
import {Builder} from "../BuilderInterface"

export class DewaanDirector{

   private builder : Builder;

   public setBuilder(builder: Builder): void{
      this.builder = builder;
   }

   /*
   We Can construct several variations of Dewaans using our director.
   */

   public TraditionalDewaanBooklet():void
   {
      this.builder.BookCover();
      this.builder.BookContentList();
      this.builder.BookChapters();
   }

   public ModrenDewaanBooklet():void
   {
      this.builder.BookCover();
      this.builder.BookForeWord();
      this.builder.BookPreface();
      this.builder.BookContentList();
      this.builder.BookChapters();
      this.builder.BookIndex();
      this.builder.BookRefrences();
   }
}
