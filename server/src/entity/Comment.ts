import { 
  Entity, 
  Column, 
  ManyToOne,
  PrimaryGeneratedColumn,  
  BaseEntity
} from "typeorm";
import { User } from "./User"

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("uuid")
  userId: string

  @ManyToOne(() => User)
  user: User

  @Column("uuid")
  episodeId: string

  @Column("uuid", { nullable: true })
  parentId: string

  @Column()
  content: string

  @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
  created: Date

  children: Comment[]
}
