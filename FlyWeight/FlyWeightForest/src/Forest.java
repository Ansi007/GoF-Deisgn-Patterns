/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Anns
 */

import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class Forest extends JFrame {
    private final List<Tree> trees = new ArrayList<>();     //List that stores all of the tres, to be painted later
    //On the other hand you can paint them while making if you do not want to store them in a list
    //But the instance will be lost (probably)
    
    public void plantTree(int x, int y, String name, Color color, String otherTreeData) {
        TreeType type = TreeFactory.getTreeType(name, color, otherTreeData);    //Get Tree Type
        //TreeType type = new TreeType(name,color,otherTreeData);
        Tree tree = new Tree(x, y, type);   //Create Tree
        trees.add(tree);    //Add in list
    }

    @Override
    public void paint(Graphics graphics) {
        for (Tree tree : trees) {
            tree.draw(graphics);    //Paint all trees
        }
    }
}