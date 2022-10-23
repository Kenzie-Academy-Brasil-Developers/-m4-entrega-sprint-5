import { MigrationInterface, QueryRunner } from "typeorm";

export class lastUpdate1666550843748 implements MigrationInterface {
    name = 'lastUpdate1666550843748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" numeric(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" integer NOT NULL`);
    }

}
