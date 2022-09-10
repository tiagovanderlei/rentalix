import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserAddAvatarRenameDriverLicence1643563567330
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "avatar",
        type: "varchar",
        isNullable: true,
      })
    );

    await queryRunner.renameColumn("users", "driver_licence", "driver_license");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "avatar");
    await queryRunner.renameColumn("users", "driver_license", "driver_licence");
  }
}
