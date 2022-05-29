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
### Games Design Patterns?
* Before we move to **Command** or **Flyweight** Pattern, We need to know Why **Games** need Design Patterns?
  - Time and Sequencing (Things must happen in right order and at right time)
  - Performance and Speed (CPU,RAM utiliziation)
### Introduction
* In OOP, the **Command** pattern is a **Behavioral** design pattern in which an object is used to encapsulate all information needed to perform
an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
* The **Command interface** has one execute method that refers/points to the event that is needed to be perform at a later time, and it may have undo and redo methods.
* The **Command Pattern** should be used when:
  - You need a command to have a life span independent of the original request.
  - You want to queue, specify and execute requests at different times.
  - You need undo/redo operations
### Implementation Problem
We have a player, represented with a dot, that can move left, right, up and down in an area. These are the only four actions that could be triggered.
We also want to provide the facility to revert player's move, in case he takes the wrong turn and at the end of the play we want to show what moves he took
in reverse order as a replay.
### Sample Run
![Command Game GIF](https://raw.githubusercontent.com/Ansi007/GoF-Deisgn-Patterns/main/Command/CommandGame.gif)
## Flyweight Pattren
### Introduction
* **Flyweight** is a **Structural** design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple instances.
* **Structural** design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.
* The shared/common part of object is called **Intrinsic State**
* The different/uncommon part of object is called **Extrnisic State**
* The **Flyweight Pattern** should be used when:
  - You need to create a large number of similar objects (say 10^5)
### Implementation Problem
We have a forest with hundred thousands or million trees, trees are distinguished on the basis of their type, Autmun OAK, Summer OAK etc.
There are specific types of trees. We know the number before hand.
Here the intrinsic state is **TreeTypes** and extrinsic state is **Tree's Location**
**TreeTypes** are stored seperately and shared among all trees
### Sample Run
![Command Game GIF](https://raw.githubusercontent.com/Ansi007/GoF-Deisgn-Patterns/main/Command/CommandGame.gif)
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
- Regisrtry For Clone<br/>
 ![Inkeddirectory_LI](https://user-images.githubusercontent.com/71145709/170858948-c893b2a2-04c6-4533-b03a-49bd446ab15d.jpg)
- Cloning Without Regisrtry<br/>
![Inkedwithoutdirectory_LI](https://user-images.githubusercontent.com/71145709/170858945-4918550f-9a80-41a9-bdb6-85653aa62e83.jpg)

