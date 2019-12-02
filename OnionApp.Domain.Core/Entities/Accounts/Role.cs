using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
    public class Role : Entity<int>
    {
        public string RoleName { get; set; }

        public List<User> Users { get; set; }
        public List<Rule> Rules { get; set; }
    }
}
