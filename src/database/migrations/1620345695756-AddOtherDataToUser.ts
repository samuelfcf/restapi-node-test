import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddOtherDataToUser1620345695756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'gender',
                type: 'enum',
                enum: [
                    "masculino",
                    "feminino",
                    "outro"
                ]
                
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'gender')
    }

}
