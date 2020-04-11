using Microsoft.EntityFrameworkCore.Migrations;

namespace daydreamcapstone.Migrations
{
    public partial class AddedBookIdToPagePOCO : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pages_Books_BookId",
                table: "Pages");

            migrationBuilder.AlterColumn<int>(
                name: "BookId",
                table: "Pages",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Pages_Books_BookId",
                table: "Pages",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pages_Books_BookId",
                table: "Pages");

            migrationBuilder.AlterColumn<int>(
                name: "BookId",
                table: "Pages",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Pages_Books_BookId",
                table: "Pages",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
