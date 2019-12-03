using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Accounts
{
  //  [Table(nameof(UserMessage), Schema = "accounts")]
    public class UserMessage : Entity<Guid>
    {
        [ForeignKey(nameof(User))]
        public int ToUserId { get; set; }
        public string Message { get; set; }
        public bool IsReaded { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime ReadDate { get; set; }

        public User User { get; set; }
    }
}
