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
        public int? RoleId { get; set; }
        public Role Role { get; set; }
    }

    public class Role: Entity<int>
    {
        public string RoleName { get; set; }
        public List<User> Users { get; set; }
        public Role()
        {
            Users = new List<User>();
        }
    }
}
