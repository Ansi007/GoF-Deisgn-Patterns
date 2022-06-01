using System;

//MEDIATOR DESIGN PATTERN

//loose the coupling
//behavioral pattern
//Mediator pattern is used to reduce communication complexity between multiple objects or classes.
//This pattern provides a mediator class which normally handles all the communications between different
//classes and supports easy maintenance of the code by loose coupling.

//Here we have an employee who wants to resign. To resign he would have to update manager, HR and accountant about his resignation.
//When accountant receives infromation about resignation, he would have to confirm from HR about it so that he can start salary settlement.
//that will be a lot of communication going on between different classes.
//so to ease this communication, and decrease the coupling, we would introduce a mediator class.

namespace Mediator 
{
    class Employee
    {
        private string empName;
        private string empID;
        public string EmployeeID { get; set; }
        public string EmployeeName { get { return empName; } set { empName = value; } }

        public Employee(string name, string id)
        {
            this.empName = name;
            this.empID = id;
        }
        public void Resign()
        {
            mediator.ResignEmployee(this);  //the employee wants to resign so he would tell that only to the mediator.
                                            //Now he has no need to communicate with HR, manager and accountant. Mediator will handle it all.
        }
    }
    class mediator
    {
        private static List<Employee> ResignedEmployees = new List<Employee>();

        public static void ResignEmployee(Employee emp)
        {
            // First it will be confirmed if the employee works in the company
            //If he works then the process of resignation acceptance would start.

            ResignedEmployees.Add(emp);
            //now manager will notify HR, Manager and Accountant to take necesary steps after resignation of employee

            bool hrStatus = HR.AddResignation(emp);
            bool managerStatus = Manager.AddResignation(emp);
            bool accountantstatus = Accountant.SalarySettlement(emp);
            if(hrStatus && managerStatus && accountantstatus)
            {
                Console.WriteLine("Employee resignation has been accepted. Salary settlement is done and all required process is completed.");
            }

        }
        public static bool shouldProcessResignation(Employee emp)  //this function will confirm the resignation of Employee
        {
            //checking if the resignation should be processed
            
            //then

            //if the employee exists in the record i.e. list.
            foreach (Employee i in ResignedEmployees)
            {
                if(i.EmployeeID == emp.EmployeeID && i.EmployeeName == emp.EmployeeName)
                {
                    return true;  
                }
            }
            return false;
        }
    }
    class HR
    {
        private static List<Employee> ResignedEmployees = new List<Employee>();

        public static bool AddResignation(Employee emp)
        {
            ResignedEmployees.Add(emp);  //the employee has been added to the list of employees that have left the company
            //other necessary procedure
            return true;
        }
    }

    class Manager
    {
        private static List<Employee> ResignedEmployees = new List<Employee>();  //manager also maintains a lists

        public static bool AddResignation(Employee emp)
        {
            ResignedEmployees.Add(emp);  //the employee has been added to the list of employees that have left the company
            //other necessary procedure
            return true;
        }
    }
    class Accountant
    {
        public static bool SalarySettlement(Employee emp)
        {
            bool status = mediator.shouldProcessResignation(emp);
            if(status)
            {
                //start the salary settlement
                //all other required procedure
                return true;
            }
            else
            {
                return false;
            }
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter employee name : ");
            string name = Console.ReadLine();
            Console.WriteLine("Enter the employee ID : ");
            string id = Console.ReadLine();

            Console.WriteLine("Enter 'y' if you want to resign : ");
            string ans = Console.ReadLine();

            if(ans == "y")
            {
                Employee emp = new Employee(name, id);
                emp.Resign();
            }
        }
    }
}