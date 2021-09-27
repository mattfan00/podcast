import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  username: string

  @Column("text", { unique: true })
  email: string

  @Column()
  password: string

  @Column("timestamptz")
  created: Date
}
