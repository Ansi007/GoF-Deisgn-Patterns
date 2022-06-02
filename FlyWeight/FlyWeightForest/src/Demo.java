/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Anns
 */

import java.awt.*;
import java.time.Duration;
import java.time.Instant;

public class Demo {
    static int CANVAS_SIZE = 500;  //Frame Size, Height and Width
    static int TREES_TO_DRAW = 10000000; //Number of trees in the forest
    static int TREE_TYPES = 5;  //Number of Types of trees (Intrinsic state)
    //Position is extrinsic
    
    public static void main(String[] args) {
        Instant start = Instant.now();  //Get the time 
        Forest forest = new Forest();   //Creates the Frame
        for (int i = 0; i < Math.floor(TREES_TO_DRAW / TREE_TYPES); i++) {
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),"SUMMER Oak", Color.GREEN, "Oak texture stub");
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),"AUTUMN Oak", Color.ORANGE, "Autumn Oak texture stub");
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),"BLUE__ Oak", Color.BLUE, "Blue Oak texture stub");
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),"RED___ Oak", Color.RED, "Red Oak texture stub");
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),"BROWN_ Oak", Color.PINK, "PINK Oak texture stub");
            //Add trees of different types in forest
        }
        
        forest.setSize(CANVAS_SIZE, CANVAS_SIZE);   //Set Frame Size
        forest.setLocationRelativeTo(null);
        forest.setVisible(true);    //Make Frame Visisble, paint it
        Instant end = Instant.now();    //End Time
        Duration timeElapsed = Duration.between(start, end);    //Total Time Taken
        System.out.println("Time taken: "+ timeElapsed.toMillis() + " milliseconds");
        
        System.out.println(TREES_TO_DRAW + " trees drawn"); //Number of tree to be drawn
        System.out.println("---------------------");
        System.out.println("Memory usage:");    
        System.out.println("Tree size (8 bytes) * " + TREES_TO_DRAW + " = " + ((8*TREES_TO_DRAW)/1024/1024) + " MB");
        //Each tree takes 8 bytes (2 integers each of 4 bytes), converting the total from bytes to MB
        System.out.println("+ TreeTypes size (~30 bytes) * " + TREE_TYPES + " = " + (30*TREE_TYPES) + " Bytes");
        //Each Tree type takes 30 bytes (APPROXIMATELY!)
        System.out.println("---------------------");
        System.out.println("Total: " + ((TREES_TO_DRAW * 8 + TREE_TYPES * 30) / 1024 / 1024) +
                "MB (instead of " + ((TREES_TO_DRAW * 38) / 1024 / 1024) + "MB)");
        //Comparison of How much memory is saved
    }

    private static int random(int min, int max) {
        return min + (int) (Math.random() * ((max - min) + 1));
    }
}
