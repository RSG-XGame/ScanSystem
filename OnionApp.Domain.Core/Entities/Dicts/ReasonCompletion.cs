using OnionApp.Domain.Core.Entities.Processing;
using OnionApp.Domain.Core.IEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnionApp.Domain.Core.Entities.Dict
{
    [Table(name: "ReasonCompletions", Schema = "dicts")]
    public class ReasonCompletion : Entity<int>
    {
        [MaxLength(64)]
        public string ReasonName { get; set; }
        [Column(name: nameof(ReasonDescription), TypeName = "text")]
        public string ReasonDescription { get; set; }

        public List<WorkMonitoring> WorkMonitorings { get; set; }
    }
}
