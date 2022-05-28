using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CommandWinForms
{
    public class Player
    {
        public static int power = 3;
        Label dotLabel;
        public int posX, posY;
        public Player(Label dotLabel)
        {
            this.dotLabel = dotLabel;
            posX = dotLabel.Location.X;
            posY = dotLabel.Location.Y;
        }
        public void Move(int posX, int posY)
        {
            this.posX = posX;
            this.posY = posY;
        }
        public void UpdatePosition()
        {
            dotLabel.Location = new Point(posX, posY);
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
        public MoveLeftCommand(Player player)
        {
            this.player = player;
        }
        public void execute()
        {
            beforeX = player.posX;
            beforeY = player.posY;
            player.Move(beforeX - Player.power, beforeY);
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
        public MoveRightCommand(Player player)
        {
            this.player = player;
        }
        public void execute()
        {
            beforeX = player.posX;
            beforeY = player.posY;
            player.Move(beforeX + Player.power, beforeY);
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

        public MoveUpCommand(Player player)
        {
            this.player = player;
        }
        public void execute()
        {
            beforeX = player.posX;
            beforeY = player.posY;
            player.Move(beforeX, beforeY - Player.power);
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

        public MoveDownCommand(Player player)
        {
            this.player = player;
        }
        public void execute()
        {
            beforeX = player.posX;
            beforeY = player.posY;
            player.Move(beforeX, beforeY + Player.power);
        }

        public void undo()
        {
            player.Move(beforeX, beforeY);
        }
    }
}
