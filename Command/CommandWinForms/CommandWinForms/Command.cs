using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CommandWinForms
{
    public class Player
    {
        public int posX, posY;
        public Player(Label dotLabel)
        {
            posX = dotLabel.Location.X;
            posY = dotLabel.Location.Y;
        }
        public void Move(int posX, int posY)
        {
            this.posX = posX;
            this.posY = posY;
        }
    }
    public interface Command
    {
        void execute();
        void undo();
    }
}
