﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using OnionApp.Infrastructure.Data;

namespace OnionApp.Infrastructure.Data.Migrations
{
    [DbContext(typeof(ScanContext))]
    [Migration("20191205115823_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("RoleName");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.ToTable("Roles","accounts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedBy = 1,
                            CreatedDate = new DateTime(2019, 12, 5, 14, 58, 23, 504, DateTimeKind.Local).AddTicks(4253),
                            IsDeleted = true,
                            RoleName = "admin",
                            RowVersion = 0u
                        },
                        new
                        {
                            Id = 2,
                            CreatedBy = 1,
                            CreatedDate = new DateTime(2019, 12, 5, 14, 58, 23, 505, DateTimeKind.Local).AddTicks(8367),
                            IsDeleted = true,
                            RoleName = "user",
                            RowVersion = 0u
                        });
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.Rule", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<int>("RoleId");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.Property<int>("SysFunctionId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.HasIndex("SysFunctionId");

                    b.ToTable("Rule","accounts");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.SysFunction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.Property<string>("SysFunctionName");

                    b.HasKey("Id");

                    b.ToTable("SysFunction","accounts");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Login");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("Password");

                    b.Property<int>("RoleId");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Users","accounts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedBy = 1,
                            CreatedDate = new DateTime(2019, 12, 5, 14, 58, 23, 505, DateTimeKind.Local).AddTicks(8989),
                            IsDeleted = true,
                            Login = "admin@mail.ru",
                            Password = "123456",
                            RoleId = 1,
                            RowVersion = 0u
                        },
                        new
                        {
                            Id = 2,
                            CreatedBy = 1,
                            CreatedDate = new DateTime(2019, 12, 5, 14, 58, 23, 506, DateTimeKind.Local).AddTicks(1611),
                            IsDeleted = true,
                            Login = "tom@mail.ru",
                            Password = "123456",
                            RoleId = 1,
                            RowVersion = 0u
                        },
                        new
                        {
                            Id = 3,
                            CreatedBy = 1,
                            CreatedDate = new DateTime(2019, 12, 5, 14, 58, 23, 506, DateTimeKind.Local).AddTicks(1633),
                            IsDeleted = true,
                            Login = "bob@mail.ru",
                            Password = "123456",
                            RoleId = 2,
                            RowVersion = 0u
                        },
                        new
                        {
                            Id = 4,
                            CreatedBy = 1,
                            CreatedDate = new DateTime(2019, 12, 5, 14, 58, 23, 506, DateTimeKind.Local).AddTicks(1634),
                            IsDeleted = true,
                            Login = "sam@mail.ru",
                            Password = "123456",
                            RoleId = 2,
                            RowVersion = 0u
                        });
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.UserMessage", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<bool>("IsReaded");

                    b.Property<string>("Message");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<DateTime>("ReadDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.Property<int>("ToUserId");

                    b.HasKey("Id");

                    b.HasIndex("ToUserId");

                    b.ToTable("UserMessage","accounts");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Devices.Device", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("DeviceSettings")
                        .HasColumnName("DeviceSettings")
                        .HasColumnType("json");

                    b.Property<int>("DeviceTypeId");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.HasIndex("DeviceTypeId");

                    b.ToTable("Device","devices");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Dict.ChangeState", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.Property<string>("StateName")
                        .HasMaxLength(64);

                    b.HasKey("Id");

                    b.ToTable("ChangeState","dict");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Dict.DeviceType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("DeviceTypeDescription");

                    b.Property<string>("DeviceTypeName")
                        .HasMaxLength(64);

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.ToTable("DeviceType","dict");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Dict.OrderStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("OrderStatusDescription");

                    b.Property<string>("OrderStatusName");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.ToTable("OrderStatus","dict");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.Change", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ChangeStateId");

                    b.Property<DateTime>("CloseDate");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<DateTime>("OpenDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.HasIndex("ChangeStateId");

                    b.ToTable("Change","processing");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("ChangeId");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<DateTime>("FinishDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<Guid?>("OrderId");

                    b.Property<int>("OrderStatusId");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.HasIndex("ChangeId");

                    b.HasIndex("OrderId");

                    b.HasIndex("OrderStatusId");

                    b.ToTable("Order","processing");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.OrderPosition", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.Property<Guid>("SAPBarcodeId");

                    b.HasKey("Id");

                    b.HasIndex("SAPBarcodeId");

                    b.ToTable("OrderPosition","processing");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.SAPBarcode", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Barcode");

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<bool>("IsScanned");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<Guid>("OrderId");

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("xmin")
                        .HasColumnType("xid");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("SAPBarcode","processing");
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.Rule", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Accounts.Role", "Role")
                        .WithMany("Rules")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("OnionApp.Domain.Core.Entities.Accounts.SysFunction", "SysFunction")
                        .WithMany("Rules")
                        .HasForeignKey("SysFunctionId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.User", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Accounts.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Accounts.UserMessage", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Accounts.User", "User")
                        .WithMany("UserMessages")
                        .HasForeignKey("ToUserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Devices.Device", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Dict.DeviceType", "DeviceType")
                        .WithMany("Devices")
                        .HasForeignKey("DeviceTypeId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.Change", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Dict.ChangeState", "ChangeState")
                        .WithMany("Changes")
                        .HasForeignKey("ChangeStateId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.Order", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Processing.Change", "Change")
                        .WithMany("Orders")
                        .HasForeignKey("ChangeId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("OnionApp.Domain.Core.Entities.Processing.Order")
                        .WithMany("Orders")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("OnionApp.Domain.Core.Entities.Dict.OrderStatus", "OrderStatus")
                        .WithMany("Orders")
                        .HasForeignKey("OrderStatusId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.OrderPosition", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Processing.SAPBarcode", "SAPBarcode")
                        .WithMany("OrderPositions")
                        .HasForeignKey("SAPBarcodeId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OnionApp.Domain.Core.Entities.Processing.SAPBarcode", b =>
                {
                    b.HasOne("OnionApp.Domain.Core.Entities.Processing.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}
