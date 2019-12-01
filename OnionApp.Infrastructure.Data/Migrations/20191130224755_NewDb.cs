using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace OnionApp.Infrastructure.Data.Migrations
{
    public partial class NewDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsEnabled = table.Column<bool>(nullable: false),
                    RoleName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    ModifiedDate = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsEnabled = table.Column<bool>(nullable: false),
                    UserName = table.Column<string>(nullable: true),
                    Login = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    RoleId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "ModifiedBy", "ModifiedDate", "RoleName" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 1, 1, 47, 55, 349, DateTimeKind.Local).AddTicks(4971), true, null, null, "admin" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "ModifiedBy", "ModifiedDate", "RoleName" },
                values: new object[] { 2, 1, new DateTime(2019, 12, 1, 1, 47, 55, 350, DateTimeKind.Local).AddTicks(8475), true, null, null, "user" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 1, 1, new DateTime(2019, 12, 1, 1, 47, 55, 350, DateTimeKind.Local).AddTicks(9278), true, "admin@mail.ru", null, null, "123456", 1, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 2, 1, new DateTime(2019, 12, 1, 1, 47, 55, 351, DateTimeKind.Local).AddTicks(2110), true, "tom@mail.ru", null, null, "123456", 1, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 3, 1, new DateTime(2019, 12, 1, 1, 47, 55, 351, DateTimeKind.Local).AddTicks(2142), true, "bob@mail.ru", null, null, "123456", 2, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "IsEnabled", "Login", "ModifiedBy", "ModifiedDate", "Password", "RoleId", "UserName" },
                values: new object[] { 4, 1, new DateTime(2019, 12, 1, 1, 47, 55, 351, DateTimeKind.Local).AddTicks(2144), true, "sam@mail.ru", null, null, "123456", 2, null });

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                table: "Users",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
