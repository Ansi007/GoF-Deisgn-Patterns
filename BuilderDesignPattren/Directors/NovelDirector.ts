/*
The Director class::-
It defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
*/
import {Builder} from "../BuilderInterface"

export class NovelDirector{

   private builder : Builder;

   public setBuilder(builder: Builder): void{
      this.builder = builder;
   }

   /*
   We Can construct several variations of novels using our director.
   */

   public TraditionalNovelBooklet():void
   {
      this.builder.BookCover();
      this.builder.BookContentList();
      this.builder.BookChapters();
   }

   public ModrenNovelBooklet():void
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
