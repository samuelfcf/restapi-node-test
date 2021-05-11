import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Lesson from "./Lesson";

@Entity('content')
class Content{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  linkContent: string;

  @Column()
  lesson_id: string

  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()
  lesson: Lesson

}

export default Content