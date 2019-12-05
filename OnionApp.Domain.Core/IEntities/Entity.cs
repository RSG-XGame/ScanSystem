using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;
using System.Text;

namespace OnionApp.Domain.Core.IEntities
{
    public abstract class Entity<T> : IEntity<T>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T Id { get; set; }
        //object IEntity.Id => Id;

        public int CreatedBy { get; set; } = 1;

        [DataType(DataType.DateTime)]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        [DataType(DataType.DateTime)]
        public DateTime? ModifiedDate { get; set; }

        public int? ModifiedBy { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [ConcurrencyCheck]
        [Column(name: "xmin", TypeName = "xid")]
        public long RowVersion { get; set; }

        public bool IsDeleted { get; set; } = true;

    }
}
