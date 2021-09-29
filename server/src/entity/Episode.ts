import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,  
  BaseEntity
} from "typeorm";

@Entity()
export class Episode extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  title: string

  @Column("text")
  description: string

  @Column()
  length_seconds: number

  @Column("timestamptz", { default: () => "CURRENT_TIMESTAMP" })
  created: Date
}
