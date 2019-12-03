using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnionApp.Infrastructure.Data;

namespace TestAppConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            using (ScanContext context1 = new ScanContext())
            using (ScanContext context2 = new ScanContext())
            {
                var val1 = context1.Roles.First(x => x.Id == 1);
                var val2 = context2.Roles.First(x => x.Id == 1);

                val1.RoleName = "admin 1";
                val2.RoleName = "admin 1";

                context1.SaveChanges();
                context2.SaveChanges();
            }
        }
    }
}
