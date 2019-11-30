using System;
using System.Collections.Generic;
using System.Text;
using OnionApp.Domain.Core.IEntities;

namespace OnionApp.Domain.Core.Entities
{
    public class User: Entity<int>
    {
        public string UserName { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        //public Role Role { get; set; }
    }
}
