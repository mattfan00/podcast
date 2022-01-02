import { 
  Entity, 
  Column, 
  ManyToOne,
  JoinColumn,
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

  @Column("text")
  url: string

  @Column("float", { name: "duration_seconds" })
  durationSeconds: number

  @Column("uuid", { name: "user_id" })
  userId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User

  @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
  created: Date
}
