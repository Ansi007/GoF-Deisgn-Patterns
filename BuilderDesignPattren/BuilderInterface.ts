/*
The Builder interface::- It declares product construction steps that are common to all types of builders.
 */
 export interface Builder {
   BookCover(): void;
   BookForeWord():void;
   BookPreface():void;
   BookContentList(): void;
   BookChapters(): void;
   BookRefrences():void;
   BookIndex():void;
}
