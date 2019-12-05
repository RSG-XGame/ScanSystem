using System;

namespace OnionApp.Domain.Core.IEntities
{
    public interface IModifiableEntity
    {
        string Name { get; set; }
    }

    public interface IEntity//: IModifiableEntity
    {
        DateTime CreatedDate { get; set; }
        int CreatedBy { get; set; }
        DateTime? ModifiedDate { get; set; }
        int? ModifiedBy { get; set; }
        long RowVersion { get; set; }
        bool IsDeleted { get; set; }
    }

    public interface IEntity<T> : IEntity
    {
        T Id { get; set; }
    }
}