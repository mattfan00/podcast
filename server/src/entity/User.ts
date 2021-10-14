import { 
  Entity, 
  Column, 
  OneToMany,
  PrimaryGeneratedColumn,  
  BaseEntity
} from "typeorm";
import { Episode } from "./Episode"

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

  @OneToMany(() => Episode, episode => episode.user)
  episodes: Episode[]

  @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
  created: Date
}
