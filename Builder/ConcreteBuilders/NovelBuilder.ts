/*
Novel Builder::-
It is the Concrete Builder classes follow the Builder interface and provide specific implementations of the building steps.
*/
import {Builder} from "../BuilderInterface"
import {Novel} from "../Products/Novel"

export class NovelBuilder implements Builder
{
   private novel : Novel;
   constructor()
   {
      this.NewNovel();
   }

   public NewNovel():void
   {
      this.novel = new Novel();
   }

   public BookCover(): void {
      this.novel.novel.push("Cover Added to Your Novel.")
   }

   public BookForeWord(): void {
      this.novel.novel.push("ForeWord Added to Your Novel.")
   }

   public BookContentList(): void {
      this.novel.novel.push("ContentList Added to Your Novel.")
   }

   public BookChapters(): void {
      this.novel.novel.push("Chapters Added to Your Novel.")
   }

   public BookIndex(): void {
      this.novel.novel.push("Index Added to Your Novel.")
   }

   public BookPreface(): void {
      this.novel.novel.push("Preface Added to Your Novel.")
   }

   public BookRefrences(): void {
      this.novel.novel.push("Refrences Added to Your Novel.")
   }

   public getNovel():Novel{
      const novel = this.novel
      this.NewNovel();
      return novel;
   }
}
