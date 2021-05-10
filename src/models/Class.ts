import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('class')
class Class{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

}

export default Class