import { query } from "express";
import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterNameColumOfContentTable1620660303867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('content', 'discription', 'description')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
    }

}
