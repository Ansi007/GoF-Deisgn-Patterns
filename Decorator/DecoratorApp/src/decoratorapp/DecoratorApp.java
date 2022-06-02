/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package decoratorapp;

/**
 *
 * @author Anns
 */

interface Shape {       //Interface of Shape
    void draw();        //Abstract Method   
}
    
class Rectangle implements Shape {      //Real Shape Rectangle
    @Override
    public void draw() {  
        System.out.println("Shape: Rectangle"); //Rectangle Draw
    }
}
class Circle implements Shape {         //Real Shape Circle
    @Override
    public void draw() {
        System.out.println("Shape: Circle");
    }
}

abstract class ShapeDecorator implements Shape {    //Abstarct Shape Decorator
    protected Shape decoratedShape;
    public ShapeDecorator(Shape decoratedShape){
        this.decoratedShape = decoratedShape;
    }
    public void draw(){
        decoratedShape.draw();
    }
}
    
class RedShapeDecorator extends ShapeDecorator {        //Real Shape
    public RedShapeDecorator(Shape decoratedShape) {
        super(decoratedShape);
    }
    @Override
    public void draw() {
        decoratedShape.draw();
        setRedBorder(decoratedShape);
    }
    private void setRedBorder(Shape decoratedShape){
        System.out.println("Border Color: Red");
    }
}

public class DecoratorApp {
    
    public static void main(String[] args) {        //Main Function
        Shape circle = new Circle();
        Shape redCircle = new RedShapeDecorator(new Circle());
        Shape redRectangle = new RedShapeDecorator(new Rectangle());
        System.out.println("Circle with normal border");
        circle.draw();

        System.out.println("\nCircle of red border");
        redCircle.draw();

        System.out.println("\nRectangle of red border");
        redRectangle.draw();
    }  
}
