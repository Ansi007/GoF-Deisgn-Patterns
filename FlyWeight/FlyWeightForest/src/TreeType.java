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

public class TreeType {
    private final String name; //Name of Tree                            // (var size)
    private final Color color; //Color of Tree                          //  (8 to 12 bytes)
    private final String otherTreeData; //Any other Data if necessary  //   (var size)

    public TreeType(String name, Color color, String otherTreeData) {
        this.name = name;
        this.color = color;
        this.otherTreeData = otherTreeData;
    }

    public void draw(Graphics g, int x, int y) {  
        g.setColor(Color.BLACK);  // Black Trunk
        g.fillRect(x - 1, y, 3, 5); 
        g.setColor(color);  // Random Colored Leaves
        g.fillOval(x - 5, y - 10, 10, 10);
    }
}
