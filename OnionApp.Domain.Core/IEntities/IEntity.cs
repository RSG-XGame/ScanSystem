using System;

namespace OnionApp.Domain.Core.IEntities
{
    public interface IModifiableEntity
    {
        string Name { get; set; }
    }

    public interface IEntity//: IModifiableEntity
    {
        object Id { get; }
        DateTime CreatedDate { get; set; }
        int CreatedBy { get; set; }
        DateTime? ModifiedDate { get; set; }
        int? ModifiedBy { get; set; }
        long RowVersion { get; set; }
        bool IsEnabled { get; set; }
    }

    public interface IEntity<T> : IEntity
    {
        new T Id { get; set; }
    }
}