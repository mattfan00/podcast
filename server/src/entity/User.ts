import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,  
  BaseEntity
} from "typeorm";

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  username: string

  @Column("text", { nullable: true })
  bio: string

  @Column("text", { nullable: true })
  avatar: string

  @Column("text", { nullable: true })
  banner: string

  @Column("text", { unique: true })
  email: string

  @Column()
  password: string

  @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
  created: Date
}
