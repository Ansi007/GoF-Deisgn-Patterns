/*
The Client can produce a copy of any object that follows the prototype interface.
*/
import { CircularReference } from "./CircularRefrence";
import { Book } from "./ConcretePrototype/BookCopies";

const book : Book = new Book();
book.setName("Namal");
book.setPublishDetails(
   {
      Date: "28/02/2022",
      publisher : "urdu book depot"
   }
);
book.setCopies(new CircularReference(book));

const cloned = book.clone();
if(book.name === cloned.name)
   console.log("Name cloned!");
else
   console.log("Failed to clone name");

if(book.publishDetails !== cloned.publishDetails)
   console.log("Details cloned!");
else
   console.log("Failed to clone details");

if(book.copies !== cloned.copies)
   console.log("Copies cloned!");
else
   console.log("Failed to clone copies");
