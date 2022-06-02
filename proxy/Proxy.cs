using System;

//PROXY DESIGN PATTERN

//Proxy means ‘in place of’, representing’ or ‘in place of’ or ‘on behalf of’ are literal meanings of proxy
//and that directly explains Proxy Design Pattern
//Structural Design Pattern

//Here we have RealInternet class that implements Internet interface. This class provides some functonality. Vist Website.
//Now we would like the users to go through some checks. I mean they should not be able to visit the website directly.
//For visiting the website the user must first be eligible to visit the website.
// we can restrict some users from visiting some websites. For that purpose we create ProxyInternet class that also implements internet interface.
//this class has an object of RealInternet class and calls the function "VisitWebsite" and some extra implementation.

namespace Proxy 
{
    class User   //user class has information of the user.
    {
        private string userName;
        private string region;
        public string UserName {get; set;}
        public string Region { get; set; }
    }
    interface Internet  //interface
    {
        public void VisitWebsite(string websiteName, User user);
    }

    class RealInternet : Internet
    {
        void Internet.VisitWebsite(string websiteName, User user)  //overrided method
        {
            Console.WriteLine("You are visiting the website named "+ websiteName+ " on the internet");
        }
    }

    class ProxyInternet : Internet
    {
        private List<User> UsersNotAllowed = new List<User>();  //this list will contain the users that are not allowed to visit BannedWebsites
        private List<string> BannedWebsites = new List<string>();  //list of banned websites
        private Internet realInternet = new RealInternet();  

        public ProxyInternet()   //constructor
        {
            //adding users in the "not allowed list"
            User u1 = new User();
            u1.UserName = "Arfa";
            u1.Region = "Pakistan";
            User u2 = new User();
            u2.UserName = "John";
            u2.Region = "Ireland";

            UsersNotAllowed.Add(u1);
            UsersNotAllowed.Add(u2);


            //declaring the banned websites

            BannedWebsites.Add("proxy.com");
            BannedWebsites.Add("pucit.edu.pk");
        }
        private bool ifUserExists(User user)
        {
            foreach(User u in UsersNotAllowed)
            {
                if(user.UserName == u.UserName && user.Region == u.Region) //the user exists in the list
                {
                    return true;
                }
            }
            return false;
        }
        public void VisitWebsite(string websiteName, User user)  //overridden method
        {
            if(ifUserExists(user) && BannedWebsites.Contains(websiteName))  //certain users are banned to visit certain websites
            {
                Console.WriteLine("This website is not availabe for this user.");
                return;
            }
            else if(user.Region == "Pakistan" && websiteName == "tikTok.com")  //users from Pakistan are banned to visit tiktok
            {
                Console.WriteLine("This website is not availabe for this user.");
                return;
            }
            realInternet.VisitWebsite(websiteName, user);

        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter username : ");
            string username = Console.ReadLine();
            Console.WriteLine("Enter your region : ");
            string region= Console.ReadLine();
            Console.WriteLine("Enter the website you want to visit : ");
            string website = Console.ReadLine();

            User u =   new User();
            u.UserName = username;
            u.Region = region;

            Internet internet = new ProxyInternet();
            internet.VisitWebsite(website, u);
        }
    }
}