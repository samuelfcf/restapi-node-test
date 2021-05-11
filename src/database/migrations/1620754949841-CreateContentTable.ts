import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContent1620660149068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'content',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'linkContent',
                        type: 'varchar'
                    },
                    {
                        name: 'lesson_id',
                        type: 'uuid'
                    }
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('content')
    }

}
