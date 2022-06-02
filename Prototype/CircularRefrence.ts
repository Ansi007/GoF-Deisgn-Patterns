
import {Prototype} from "./ProrotyeInterface"

export class CircularReference
{
   public Copy : Prototype;

    constructor(prototype: Prototype)
    {
        this.Copy = prototype;
    }
}
