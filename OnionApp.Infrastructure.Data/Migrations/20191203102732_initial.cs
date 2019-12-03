using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace OnionApp.Infrastructure.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "accounts");

            migrationBuilder.EnsureSchema(
                name: "devices");

            migrationBuilder.EnsureSchema(
                name: "processing");

            migrationBuilder.CreateTable(
                name: "Role",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    RoleName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SysFunction",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    SysFunctionName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SysFunction", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DeviceType",
                schema: "devices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    DeviceTypeName = table.Column<string>(maxLength: 64, nullable: true),
                    DeviceTypeDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeviceType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Change",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Change", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OrderStatus",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    OrderStatusName = table.Column<string>(nullable: true),
                    OrderStatusDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    Login = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                    table.ForeignKey(
                        name: "FK_User_Role_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "accounts",
                        principalTable: "Role",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rule",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    SysFunctionId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rule", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rule_Role_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "accounts",
                        principalTable: "Role",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Rule_SysFunction_SysFunctionId",
                        column: x => x.SysFunctionId,
                        principalSchema: "accounts",
                        principalTable: "SysFunction",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Device",
                schema: "devices",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    DeviceSettings = table.Column<string>(nullable: true),
                    DeviceTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Device", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Device_DeviceType_DeviceTypeId",
                        column: x => x.DeviceTypeId,
                        principalSchema: "devices",
                        principalTable: "DeviceType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    FinishDate = table.Column<DateTime>(nullable: false),
                    OrderStatusId = table.Column<int>(nullable: false),
                    ChangeId = table.Column<Guid>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Order_Change_ChangeId",
                        column: x => x.ChangeId,
                        principalSchema: "processing",
                        principalTable: "Change",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Order_Order_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "processing",
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Order_OrderStatus_OrderStatusId",
                        column: x => x.OrderStatusId,
                        principalSchema: "processing",
                        principalTable: "OrderStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserMessage",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    ToUserId = table.Column<int>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    IsReaded = table.Column<bool>(nullable: false),
                    ReadDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserMessage", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserMessage_User_ToUserId",
                        column: x => x.ToUserId,
                        principalSchema: "accounts",
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SAPBarcode",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: false),
                    Barcode = table.Column<string>(nullable: true),
                    IsScanned = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SAPBarcode", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SAPBarcode_Order_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "processing",
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderPosition",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    SAPBarcodeId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderPosition", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderPosition_SAPBarcode_SAPBarcodeId",
                        column: x => x.SAPBarcodeId,
                        principalSchema: "processing",
                        principalTable: "SAPBarcode",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Role",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "ModifiedBy", "ModifiedDate", "RoleName" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 3, 13, 27, 31, 856, DateTimeKind.Local).AddTicks(585), true, null, null, "admin" });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Role",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "ModifiedBy", "ModifiedDate", "RoleName" },
                values: new object[] { 2, 1, new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(4501), true, null, null, "user" });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "User",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(5540), true, "admin@mail.ru", null, null, "123456", 1, null });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "User",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 2, 1, new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(8190), true, "tom@mail.ru", null, null, "123456", 1, null });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "User",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 3, 1, new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(8212), true, "bob@mail.ru", null, null, "123456", 2, null });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "User",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 4, 1, new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(8214), true, "sam@mail.ru", null, null, "123456", 2, null });

            migrationBuilder.CreateIndex(
                name: "IX_Rule_RoleId",
                schema: "accounts",
                table: "Rule",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Rule_SysFunctionId",
                schema: "accounts",
                table: "Rule",
                column: "SysFunctionId");

            migrationBuilder.CreateIndex(
                name: "IX_User_RoleId",
                schema: "accounts",
                table: "User",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserMessage_ToUserId",
                schema: "accounts",
                table: "UserMessage",
                column: "ToUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Device_DeviceTypeId",
                schema: "devices",
                table: "Device",
                column: "DeviceTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_ChangeId",
                schema: "processing",
                table: "Order",
                column: "ChangeId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_OrderId",
                schema: "processing",
                table: "Order",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_OrderStatusId",
                schema: "processing",
                table: "Order",
                column: "OrderStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderPosition_SAPBarcodeId",
                schema: "processing",
                table: "OrderPosition",
                column: "SAPBarcodeId");

            migrationBuilder.CreateIndex(
                name: "IX_SAPBarcode_OrderId",
                schema: "processing",
                table: "SAPBarcode",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rule",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "UserMessage",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "Device",
                schema: "devices");

            migrationBuilder.DropTable(
                name: "OrderPosition",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "SysFunction",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "User",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "DeviceType",
                schema: "devices");

            migrationBuilder.DropTable(
                name: "SAPBarcode",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "Role",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "Order",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "Change",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "OrderStatus",
                schema: "processing");
        }
    }
}
