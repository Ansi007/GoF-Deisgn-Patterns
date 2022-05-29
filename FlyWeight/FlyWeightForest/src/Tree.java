/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Anns
 */

import java.awt.*;      //Import any required library

public class Tree {
    private final int x; //PositionX of Tree        // 4 bytes
    private final int y; //PositionY of Tree        // 4 bytes
    private final TreeType type; //Type of Tree     // 30 bytes approx

    public Tree(int x, int y, TreeType type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public void draw(Graphics g) {
        type.draw(g, x, y);     //Draw Tree on Frame
    }
}
