# GoF-Deisgn-Patterns
## Builder Pattren
### Introduction
* The **Builder interface** declares product construction steps that are common to all types of builders.
* **Products** are resulting objects. Products constructed by different builders don’t have to belong to the same class hierarchy or interface.
* **Concrete Builders** provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface.
* The **Director** class defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
* The **Client** must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction.
* The Builder pattern can be used without a Director class.
### Implementation Problem
John is an assistant at a book publising shop. He has to assemble books for publishing. Book assembling is a complex task for him as it consists of a lot of sub-steps like adding preface, contentList, cover, preface and a lot of other scetions. He has to create diffrent types of books like educational books, novels , dewaan and afsanas etc. He can't remember where to include which section. so he wants to design a **Book Builder** for himself. Where he can easily extend the classes of books ( e.g. he might want to add biblographies in future etc.) and add different variations of each class according to his evolving needs. *Let's help John!*
### Sample Run
![builder](https://user-images.githubusercontent.com/71145709/170857222-5dad503e-7d87-46da-947d-1107c9cdcb8a.png)
## Command Pattren
## Flyweight Pattren
## Prototype Pattren
### Introduction
* The **Prototype interface** declares the cloning methods. In most cases, it’s a single clone method.
* The **Concrete Prototype** class implements the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.
* The **Client** can produce a copy of any object that follows the prototype interface.
* The **Prototype registry** is used as a registry service to have all prototypes accessible using simple string parameters.
* The Clone pattern can be used without a Regisrtry class.
### Implementation Problem
John succeed as assembler and now he is running a book publising center of his own. He has a lot of orders and for each order he has to publish a bunch of books of similar type. It takes a lot of time to create every book object from scratch. He want to develope a bluprint object that he can clone to get started and avoid the hassle of reaching out database and creating object from sacratch. alse he wants to have a directory where he can store commonly used clones as a ready made collection to be used. *Let's help him once again.*
### Sample Run
- Directory For Clone<br/>
![directory](https://user-images.githubusercontent.com/71145709/170858568-1fd9b355-3c91-43f0-beb0-77869f21c25a.PNG)
- Cloning Without Directory<br/>
![withoutdirectory](https://user-images.githubusercontent.com/71145709/170858575-eb418aab-7914-42f0-bfd9-e811d0544582.PNG)
