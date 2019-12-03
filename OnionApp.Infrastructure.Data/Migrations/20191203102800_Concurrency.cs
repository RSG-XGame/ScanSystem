using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OnionApp.Infrastructure.Data.Migrations
{
    public partial class Concurrency : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "Role",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 59, 547, DateTimeKind.Local).AddTicks(6990));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "Role",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 59, 549, DateTimeKind.Local).AddTicks(8765));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 59, 549, DateTimeKind.Local).AddTicks(9983));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 59, 550, DateTimeKind.Local).AddTicks(6414));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 59, 550, DateTimeKind.Local).AddTicks(6973));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 59, 550, DateTimeKind.Local).AddTicks(6977));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "Role",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 31, 856, DateTimeKind.Local).AddTicks(585));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "Role",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(4501));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(5540));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(8190));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(8212));

            migrationBuilder.UpdateData(
                schema: "accounts",
                table: "User",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedDate",
                value: new DateTime(2019, 12, 3, 13, 27, 31, 858, DateTimeKind.Local).AddTicks(8214));
        }
    }
}
