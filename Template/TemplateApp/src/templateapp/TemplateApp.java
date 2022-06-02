/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package templateapp;

/**
 *
 * @author Anns
 */


abstract class Game
{
    abstract void initialize();     //To be override
    abstract void startPlay();      //To be override
    abstract void endPlay();        //To be override

    //template method
    public final void play(){       //Cannot Override
        //initialize the game
        initialize();
        //start game
        startPlay();
        //end game
        endPlay();
    }
}

class Cricket extends Game
{
    @Override
    void endPlay() {
        System.out.println("Cricket Game Finished!");
    }
    @Override
    void initialize() {
        System.out.println("Cricket Game Initialized! Start playing.");
    }
    @Override
    void startPlay() {
        System.out.println("Cricket Game Started. Enjoy the game!");
    }
}

class Football extends Game {
    @Override
    void endPlay() {
        System.out.println("Football Game Finished!");
    }
    @Override
    void initialize() {
        System.out.println("Football Game Initialized! Start playing.");
    }
    @Override
    void startPlay() {
        System.out.println("Football Game Started. Enjoy the game!");
    }
}



public class TemplateApp {

    /**
     * @param args the command line arguments
     */
    
    public static void main(String[] args) {

        Game game = new Cricket();
        game.play();
        System.out.println();
        game = new Football();
        game.play();
        
    }  
}
