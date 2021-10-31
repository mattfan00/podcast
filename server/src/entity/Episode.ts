import { 
  Entity, 
  Column, 
  ManyToOne,
  PrimaryGeneratedColumn,  
  BaseEntity
} from "typeorm"
import { User } from "./User"

@Entity()
export class Episode extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  title: string

  @Column("text")
  description: string

  @Column("text", { nullable: true })
  url: string

  @Column()
  lengthSeconds: number

  @Column("uuid")
  userId: string

  @ManyToOne(() => User, user => user.episodes)
  user: User

  @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
  created: Date
}
