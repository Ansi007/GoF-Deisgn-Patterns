using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CommandWinForms
{
    public partial class CommandGame : Form
    {
        Player player;
        Command command;
        Stack<Command> cmds;
        public CommandGame()
        {
            InitializeComponent();
        }
        private void CommandGame_Load(object sender, EventArgs e)
        {
            player = new Player(dotLabel);
            cmds = new Stack<Command>();
        }
        private void CommandGame_KeyPress(object sender, KeyPressEventArgs e)
        {
            char key = e.KeyChar;
            switch (key)
            {
                case 'W':
                case 'w':
                    command = new MoveUpCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case 'A':
                case 'a':
                    command = new MoveLeftCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case 'S':
                case 's':
                    command = new MoveDownCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case 'D':
                case 'd':
                    command = new MoveRightCommand(player);
                    cmds.Push(command);
                    command.execute();
                    break;
                case 'Z':
                case 'z':
                    if (cmds.Count > 0)
                    {
                        Command c = cmds.Pop();
                        c.undo();
                        player.UpdatePosition();
                    }
                    break;
                case 'R':
                case 'r':
                    while (cmds.Count > 0)
                    {
                        var thread = new System.Threading.Thread(p =>
                        {
                            System.Threading.Thread.Sleep(5000);
                        });
                        thread.Start();
                        Command c = cmds.Pop();
                        c.undo();
                        player.UpdatePosition();
                    }
                        break;
                default:
                    break;
            }
            player.UpdatePosition();
        }

    }
}
