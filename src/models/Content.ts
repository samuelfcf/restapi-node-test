import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('content')
class Content{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  linkContent: string;

}

export default Content