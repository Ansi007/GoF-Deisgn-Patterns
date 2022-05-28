using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommandWinForms
{
    public interface Command
    {
        void execute();
        void undo();
    }
}
