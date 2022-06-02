/*
Dewaan Builder::-
It is the Concrete Builder classes follow the Builder interface and provide specific implementations of the building steps.
*/
import {Builder} from "../BuilderInterface"
import {Dewaan} from "../Products/Dewaan"

export class DewaanBuilder implements Builder
{
   private dewaan : Dewaan;
   constructor()
   {
      this.NewDewaan();
   }

   public NewDewaan():void
   {
      this.dewaan = new Dewaan();
   }

   public BookCover(): void {
      this.dewaan.dewaan.push("Cover Added to Your Dewaan.");
   }

   public BookForeWord(): void {
      this.dewaan.dewaan.push("ForeWord Added to Your Dewaan.");
   }

   public BookContentList(): void {
      this.dewaan.dewaan.push("ContentList Added to Your Dewaan.");
   }

   public BookChapters(): void {
      this.dewaan.dewaan.push("Chapters Added to Your Dewaan.");
   }

   public BookIndex(): void {
      this.dewaan.dewaan.push("Index Added to Your Dewaan.");
   }

   public BookPreface(): void {
      this.dewaan.dewaan.push("Preface Added to Your Dewaan.");
   }

   public BookRefrences(): void {
      this.dewaan.dewaan.push("Refrences Added to Your Dewaan.");
   }

   public getDewaan():Dewaan{
      const dewaan = this.dewaan
      this.NewDewaan();
      return dewaan;
   }
}
