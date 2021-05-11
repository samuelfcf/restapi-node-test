import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Content from "./Content";

@Entity('lesson')
class Lesson{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToOne(type => Content, lesson => Lesson)
  content: Content

}

export default Lesson