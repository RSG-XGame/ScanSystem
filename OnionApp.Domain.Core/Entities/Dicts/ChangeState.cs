using OnionApp.Domain.Core.Entities.Processing;
using OnionApp.Domain.Core.IEntities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnionApp.Domain.Core.Entities.Dict
{
    [Table(name: nameof(ChangeState), Schema = "dicts")]
    public class ChangeState : Entity<int>
    {
        [MaxLength(64)]
        public string StateName { get; set; }

        public List<Change> Changes { get; set; }
    }
}
