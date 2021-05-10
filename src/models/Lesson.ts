import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('lesson')
class Lesson{
  @PrimaryGeneratedColumn('uuid')
  idAula: string;

  @Column()
  description: string;

}

export default Lesson