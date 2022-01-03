import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn
} from "typeorm"

@Entity({ name: "media_file" })
export class MediaFile extends BaseEntity {
  @PrimaryColumn("text", { name: "file_name" })
  fileName: string

  @Column("text", { name: "original_file_name" })
  originalFileName: string

  @Column()
  size: number

  @Column("text")
  path: string
}
