using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
    public class UserMessage : Entity<Guid>
    {
        [ForeignKey(nameof(User))]
        public int ToUserId { get; set; }
        public string Message { get; set; }
        public bool IsReaded { get; set; }
        public DateTime ReadDate { get; set; }

        public User User { get; set; }
    }
}
