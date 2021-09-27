import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,  
  BaseEntity
} from "typeorm";

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  username: string

  @Column("text", { nullable: true })
  description: string

  @Column("text", { nullable: true })
  avatar: string

  @Column("text", { unique: true })
  email: string

  @Column()
  password: string

  @Column("timestamptz", { nullable: true })
  created: Date
}
