using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OnionApp.Domain.Core.IEntities;
using OnionApp.Domain.Interfaces;

namespace OnionApp.Infrastructure.Data
{
    public class Repository: ReadOnlyRepository, IRepository
    {
        public virtual void Create<TEntity>(TEntity entity, int createdBy = 1)
            where TEntity : class, IEntity
        {
            entity.CreatedDate = DateTime.UtcNow;
            entity.CreatedBy = createdBy;
            Context.Set<TEntity>().Add(entity);
        }

        public virtual void Update<TEntity>(TEntity entity, int? modifiedBy = null)
            where TEntity : class, IEntity
        {
            entity.ModifiedDate = DateTime.UtcNow;
            entity.ModifiedBy = modifiedBy;
            Context.Set<TEntity>().Attach(entity);
            Context.Entry(entity).State = EntityState.Modified;
        }

        public virtual void Delete<TEntity>(object id)
            where TEntity : class, IEntity
        {
            TEntity entity = Context.Set<TEntity>().Find(id);
            Delete(entity);
        }

        public virtual void Delete<TEntity>(TEntity entity)
            where TEntity : class, IEntity
        {
            var dbSet = Context.Set<TEntity>();
            if (Context.Entry(entity).State == EntityState.Detached)
            {
                dbSet.Attach(entity);
            }
            dbSet.Remove(entity);
        }

        public virtual void Save()
        {
            //try
            //{
                Context.SaveChanges();
            //}
            //catch (DbEntityValidationException e)
            //{
            //    ThrowEnhancedValidationException(e);
            //}
        }

        public virtual Task SaveAsync()
        {
            //try
            //{
                return Context.SaveChangesAsync();
            //}
            //catch (DbEntityValidationException e)
            //{
            //    ThrowEnhancedValidationException(e);
            //}

            //return Task.FromResult(0);
        }

        //protected virtual void ThrowEnhancedValidationException(DbEntityValidationException e)
        //{
        //    var errorMessages = e.EntityValidationErrors
        //            .SelectMany(x => x.ValidationErrors)
        //            .Select(x => x.ErrorMessage);

        //    var fullErrorMessage = string.Join("; ", errorMessages);
        //    var exceptionMessage = string.Concat(e.Message, " The validation errors are: ", fullErrorMessage);
        //    throw new DbEntityValidationException(exceptionMessage, e.EntityValidationErrors);
        //}

        #region IDisposable Support
        private bool _isDisposed;

        protected override void Dispose(bool disposing)
        {
            if (_isDisposed) return;
            if (disposing)
            {
                Context?.Dispose();
            }
            _isDisposed = true;
            base.Dispose(disposing);
        }
        #endregion
    }
}