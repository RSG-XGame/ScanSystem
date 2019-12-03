using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
    [Table(nameof(User), Schema = "accounts")]
    public class User : Entity<int>
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }
        public int RoleId { get; set; }

        public Role Role { get; set; }
        public List<UserMessage> UserMessages { get; set; }
    }
}
