using System;
using System.Threading.Tasks;
using OnionApp.Domain.Core.IEntities;

namespace OnionApp.Domain.Interfaces
{
    public interface IRepository: IReadOnlyRepository
    {
        void Create<TEntity>(TEntity entity, int createdBy = 1)
            where TEntity : class, IEntity;

        void Update<TEntity>(TEntity entity, int? modifiedBy = null)
            where TEntity : class, IEntity;

        void Delete<TEntity>(int id, int? modifiedBy = null)
            where TEntity : class, IEntity;

        void Delete<TEntity>(Guid id, int? modifiedBy = null)
            where TEntity : class, IEntity;

        void Delete<TEntity>(TEntity entity, int? modifiedBy = null)
            where TEntity : class, IEntity;

        void Save();

        Task SaveAsync();
    }
}