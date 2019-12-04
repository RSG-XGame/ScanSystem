using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using OnionApp.Domain.Core.Entities;
using OnionApp.Domain.Core.Entities.Accounts;
using OnionApp.Domain.Core.Entities.Devices;
using OnionApp.Domain.Core.Entities.Dict;
using OnionApp.Domain.Core.Entities.Processing;
using OnionApp.Domain.Core.IEntities;

namespace OnionApp.Infrastructure.Data
{
    public sealed class ScanContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Rule> Rules { get; set; }
        public DbSet<SysFunction> SysFunctions { get; set; }
        public DbSet<UserMessage> UserMessages { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<DeviceType> DeviceTypes { get; set; }
        public DbSet<Change> Changes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderPosition> OrderPositions { get; set; }
        public DbSet<OrderStatus> OrderStatuses { get; set; }
        public DbSet<SAPBarcode> SAPBarcodes { get; set; }

        //public ScanContext()
        //{
        //    Database.EnsureCreated();
        //}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        #if DEBUG
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=ScanDb;Username=postgres;Password=Jgbpl.kznjh666");
        #else
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=ScanDb;Username=postgres;Password=123456");
        #endif
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var adminRole = new Role {Id = 1, RoleName = "admin"};
            var userRole = new Role {Id = 2, RoleName = "user"};
            var adminUser1 = new User {Id = 1, Login = "admin@mail.ru", Password = "123456", RoleId = adminRole.Id};
            var adminUser2 = new User {Id = 2, Login = "tom@mail.ru", Password = "123456", RoleId = adminRole.Id};
            var simpleUser1 = new User {Id = 3, Login = "bob@mail.ru", Password = "123456", RoleId = userRole.Id};
            var simpleUser2 = new User {Id = 4, Login = "sam@mail.ru", Password = "123456", RoleId = userRole.Id};

            foreach (var relShip in modelBuilder.Model.GetEntityTypes().SelectMany(x => x.GetForeignKeys()))
            {
                relShip.DeleteBehavior = DeleteBehavior.Restrict;
            }

            modelBuilder.Entity<Role>().HasData(adminRole, userRole);
            modelBuilder.Entity<User>().HasData(adminUser1, adminUser2, simpleUser1, simpleUser2);
            base.OnModelCreating(modelBuilder);
        }
    }
}
