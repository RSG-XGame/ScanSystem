using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace OnionApp.Infrastructure.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "accounts");

            migrationBuilder.EnsureSchema(
                name: "devices");

            migrationBuilder.EnsureSchema(
                name: "dicts");

            migrationBuilder.EnsureSchema(
                name: "logger");

            migrationBuilder.EnsureSchema(
                name: "processing");

            migrationBuilder.CreateTable(
                name: "Roles",
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
                    IsDeleted = table.Column<bool>(nullable: false),
                    RoleName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SysFunctions",
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
                    IsDeleted = table.Column<bool>(nullable: false),
                    SysFunctionName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SysFunctions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChangeStates",
                schema: "dicts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    StateName = table.Column<string>(maxLength: 64, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChangeStates", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClientTypes",
                schema: "dicts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DeviceTypes",
                schema: "dicts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeviceTypeName = table.Column<string>(maxLength: 64, nullable: true),
                    DeviceTypeDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeviceTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OrderStatuses",
                schema: "dicts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    OrderStatusName = table.Column<string>(nullable: true),
                    OrderStatusDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatuses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReasonCompletions",
                schema: "dicts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ReasonName = table.Column<string>(maxLength: 64, nullable: true),
                    ReasonDescription = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReasonCompletions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LogTypes",
                schema: "logger",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
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
                    IsDeleted = table.Column<bool>(nullable: false),
                    Login = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "accounts",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Rules",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    SysFunctionId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rules_Roles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "accounts",
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Rules_SysFunctions_SysFunctionId",
                        column: x => x.SysFunctionId,
                        principalSchema: "accounts",
                        principalTable: "SysFunctions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Changes",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    OpenDate = table.Column<DateTime>(nullable: false),
                    CloseDate = table.Column<DateTime>(nullable: true),
                    ChangeStateId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Changes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Changes_ChangeStates_ChangeStateId",
                        column: x => x.ChangeStateId,
                        principalSchema: "dicts",
                        principalTable: "ChangeStates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                schema: "dicts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    ClientTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Clients_ClientTypes_ClientTypeId",
                        column: x => x.ClientTypeId,
                        principalSchema: "dicts",
                        principalTable: "ClientTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Devices",
                schema: "devices",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeviceSettings = table.Column<string>(type: "json", nullable: true),
                    DeviceTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Devices_DeviceTypes_DeviceTypeId",
                        column: x => x.DeviceTypeId,
                        principalSchema: "dicts",
                        principalTable: "DeviceTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Logs",
                schema: "logger",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ModuleName = table.Column<string>(nullable: true),
                    ClassName = table.Column<string>(nullable: true),
                    MethodName = table.Column<string>(nullable: true),
                    Message = table.Column<string>(nullable: true),
                    LogTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Logs_LogTypes_LogTypeId",
                        column: x => x.LogTypeId,
                        principalSchema: "logger",
                        principalTable: "LogTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserMessages",
                schema: "accounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ToUserId = table.Column<int>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    IsReaded = table.Column<bool>(nullable: false),
                    ReadDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserMessages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserMessages_Users_ToUserId",
                        column: x => x.ToUserId,
                        principalSchema: "accounts",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    FinishDate = table.Column<DateTime>(nullable: false),
                    OrderStatusId = table.Column<int>(nullable: false),
                    ChangeId = table.Column<Guid>(nullable: true),
                    ClientId = table.Column<Guid>(nullable: false),
                    CountPositions = table.Column<int>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Changes_ChangeId",
                        column: x => x.ChangeId,
                        principalSchema: "processing",
                        principalTable: "Changes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Clients_ClientId",
                        column: x => x.ClientId,
                        principalSchema: "dicts",
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Orders_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "processing",
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_OrderStatuses_OrderStatusId",
                        column: x => x.OrderStatusId,
                        principalSchema: "dicts",
                        principalTable: "OrderStatuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SAPBarcodes",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: false),
                    Barcode = table.Column<string>(nullable: true),
                    IsScanned = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SAPBarcodes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SAPBarcodes_Orders_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "processing",
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkMonitorings",
                schema: "processing",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    xmin = table.Column<uint>(type: "xid", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: false),
                    ReasonComplationId = table.Column<int>(nullable: false),
                    AdditionalInformation = table.Column<string>(type: "text", nullable: true),
                    ReasonCompletionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkMonitorings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WorkMonitorings_Orders_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "processing",
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkMonitorings_ReasonCompletions_ReasonCompletionId",
                        column: x => x.ReasonCompletionId,
                        principalSchema: "dicts",
                        principalTable: "ReasonCompletions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                    IsDeleted = table.Column<bool>(nullable: false),
                    SAPBarcodeId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderPosition", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderPosition_SAPBarcodes_SAPBarcodeId",
                        column: x => x.SAPBarcodeId,
                        principalSchema: "processing",
                        principalTable: "SAPBarcodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Roles",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsDeleted", "ModifiedBy", "ModifiedDate", "RoleName" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 22, 14, 4, 42, 585, DateTimeKind.Local).AddTicks(9499), true, null, null, "admin" });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Roles",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsDeleted", "ModifiedBy", "ModifiedDate", "RoleName" },
                values: new object[] { 2, 1, new DateTime(2019, 12, 22, 14, 4, 42, 594, DateTimeKind.Local).AddTicks(4504), true, null, null, "user" });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsDeleted", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 22, 14, 4, 42, 594, DateTimeKind.Local).AddTicks(5278), true, "admin@mail.ru", null, null, "123456", 1, null });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsDeleted", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 2, 1, new DateTime(2019, 12, 22, 14, 4, 42, 594, DateTimeKind.Local).AddTicks(7923), true, "tom@mail.ru", null, null, "123456", 1, null });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsDeleted", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 3, 1, new DateTime(2019, 12, 22, 14, 4, 42, 594, DateTimeKind.Local).AddTicks(7951), true, "bob@mail.ru", null, null, "123456", 2, null });

            migrationBuilder.InsertData(
                schema: "accounts",
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsDeleted", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 4, 1, new DateTime(2019, 12, 22, 14, 4, 42, 594, DateTimeKind.Local).AddTicks(7953), true, "sam@mail.ru", null, null, "123456", 2, null });

            migrationBuilder.CreateIndex(
                name: "IX_Rules_RoleId",
                schema: "accounts",
                table: "Rules",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Rules_SysFunctionId",
                schema: "accounts",
                table: "Rules",
                column: "SysFunctionId");

            migrationBuilder.CreateIndex(
                name: "IX_UserMessages_ToUserId",
                schema: "accounts",
                table: "UserMessages",
                column: "ToUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                schema: "accounts",
                table: "Users",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_DeviceTypeId",
                schema: "devices",
                table: "Devices",
                column: "DeviceTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_ClientTypeId",
                schema: "dicts",
                table: "Clients",
                column: "ClientTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Logs_LogTypeId",
                schema: "logger",
                table: "Logs",
                column: "LogTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Changes_ChangeStateId",
                schema: "processing",
                table: "Changes",
                column: "ChangeStateId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderPosition_SAPBarcodeId",
                schema: "processing",
                table: "OrderPosition",
                column: "SAPBarcodeId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ChangeId",
                schema: "processing",
                table: "Orders",
                column: "ChangeId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ClientId",
                schema: "processing",
                table: "Orders",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderId",
                schema: "processing",
                table: "Orders",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_OrderStatusId",
                schema: "processing",
                table: "Orders",
                column: "OrderStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_SAPBarcodes_OrderId",
                schema: "processing",
                table: "SAPBarcodes",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkMonitorings_OrderId",
                schema: "processing",
                table: "WorkMonitorings",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkMonitorings_ReasonCompletionId",
                schema: "processing",
                table: "WorkMonitorings",
                column: "ReasonCompletionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rules",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "UserMessages",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "Devices",
                schema: "devices");

            migrationBuilder.DropTable(
                name: "Logs",
                schema: "logger");

            migrationBuilder.DropTable(
                name: "OrderPosition",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "WorkMonitorings",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "SysFunctions",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "Users",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "DeviceTypes",
                schema: "dicts");

            migrationBuilder.DropTable(
                name: "LogTypes",
                schema: "logger");

            migrationBuilder.DropTable(
                name: "SAPBarcodes",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "ReasonCompletions",
                schema: "dicts");

            migrationBuilder.DropTable(
                name: "Roles",
                schema: "accounts");

            migrationBuilder.DropTable(
                name: "Orders",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "Changes",
                schema: "processing");

            migrationBuilder.DropTable(
                name: "Clients",
                schema: "dicts");

            migrationBuilder.DropTable(
                name: "OrderStatuses",
                schema: "dicts");

            migrationBuilder.DropTable(
                name: "ChangeStates",
                schema: "dicts");

            migrationBuilder.DropTable(
                name: "ClientTypes",
                schema: "dicts");
        }
    }
}
