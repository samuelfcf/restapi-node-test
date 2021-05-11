import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateForeingKeyInContentTable1620755375254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'content',
            new TableForeignKey({
                name: 'FKLesson',
                referencedTableName: 'lesson',
                referencedColumnNames: ['id'],
                columnNames: ['lesson_id']
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('content', 'FKLesson')
    }

}
