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
import java.util.HashMap;
import java.util.Map;

public class TreeFactory {
    static Map<String, TreeType> treeTypes = new HashMap<>();       //Hash Type Against The Name (Could be done against the Color too, totally your choice)

    public static TreeType getTreeType(String name, Color color, String otherTreeData) { //Get Tree Type
        TreeType result = treeTypes.get(name);  //Check If the type already exists
        if (result == null) {   //if not
            result = new TreeType(name, color, otherTreeData);  //Create a new one 
            treeTypes.put(name, result);    //Add into the HashMap
        }
        return result;  //Return type
    }
}