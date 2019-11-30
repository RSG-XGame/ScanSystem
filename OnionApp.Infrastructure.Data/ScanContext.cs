using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using OnionApp.Domain.Core.Entities;

namespace OnionApp.Infrastructure.Data
{
    internal sealed class ScanContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public ScanContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=ScanDb;Username=postgres;Password=123456");
        }
    }
}
