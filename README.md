# GoF-Deisgn-Patterns
## Builder Pattren
* The **Builder interface** declares product construction steps that are common to all types of builders.
* **Products** are resulting objects. Products constructed by different builders don’t have to belong to the same class hierarchy or interface.
* **Concrete Builders** provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface.
* The **Director** class defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
* The **Client** must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction.
* The Builder pattern can be used without a Director class.
## Command Pattren
## Flyweight Pattren
## Prototype Pattren
* The **Prototype interface** declares the cloning methods. In most cases, it’s a single clone method.
* The **Concrete Prototype** class implements the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.
* The **Client** can produce a copy of any object that follows the prototype interface.
