Game.program();
public class Player
{
    public int posX, posY;
    public Player()
    {
        posY = 0;
        posX = 0;
    }
    public void Move(int posX,int posY)
    {
        this.posX = posX;
        this.posY = posY;
    }
    public void ShowPlayerPos()
    {
        Console.WriteLine("Player is at (" + posX + "," + posY + ")\n");
    }
}
public interface Command
{
    void execute();
    void undo();
}

public class MoveLeftCommand : Command
{
    Player player;
    int beforeX, beforeY;
    public MoveLeftCommand(Player p)
    {
        player = p;
    }
    public void execute()
    {
        beforeX = player.posX;
        beforeY = player.posY;
        player.Move(beforeX - 1,beforeY);
    }

    public void undo()
    {
        player.Move(beforeX, beforeY);
    }
}
public class MoveRightCommand : Command
{
    Player player;
    int beforeX, beforeY;
    public MoveRightCommand(Player p)
    {
        player = p;
    }
    public void execute()
    {
        beforeX = player.posX;
        beforeY = player.posY;
        player.Move(beforeX + 1, beforeY);
    }

    public void undo()
    {
        player.Move(beforeX, beforeY);
    }
}
public class MoveUpCommand : Command
{
    Player player;
    int beforeX, beforeY;

    public MoveUpCommand(Player p)
    {
        player = p;
    }
    public void execute()
    {
        beforeX = player.posX;
        beforeY = player.posY;
        player.Move(beforeX, beforeY - 1);
    }

    public void undo()
    {
        player.Move(beforeX, beforeY);
    }
}
public class MoveDownCommand : Command
{
    Player player;
    int beforeX, beforeY;

    public MoveDownCommand(Player p)
    {
        player = p;
    }
    public void execute()
    {
        beforeX = player.posX;
        beforeY = player.posY;
        player.Move(beforeX, beforeY + 1);
    }

    public void undo()
    {
        player.Move(beforeX, beforeY);
    }
}

public static class Game
{
    public static void program()
    {
        Player player = new Player();
        Command command;
        Stack<Command> cmds = new Stack<Command>();
        player.ShowPlayerPos();
        bool flag = true;
        while (flag)
        {
            Console.Write("Use WASD to move: ");
            ConsoleKey k = Console.ReadKey().Key;
            Console.WriteLine();
            switch (k)
            {
                case ConsoleKey.W:
                    command = new MoveUpCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case ConsoleKey.A:
                    command = new MoveLeftCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case ConsoleKey.S:
                    command = new MoveDownCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case ConsoleKey.D:
                    command = new MoveRightCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case ConsoleKey.Z:
                    if(cmds.Count > 0)
                    {
                        Command c = cmds.Pop();
                        c.undo();
                    }
                    break;
                default:
                    flag = false;
                    break;
            }
            if(flag) player.ShowPlayerPos();
        }
        while(cmds.Count > 0)
        {
            Command c = cmds.Pop();
            c.undo();
            player.ShowPlayerPos();
        }
    }
}