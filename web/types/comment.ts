import { User } from "./user"

export interface Comment {
  id: string
  userId: string
  user: User
  episodeId: string
  parentId: string | null
  content: string
  created: string
  children: Comment[]
}

export interface PostCommentFields {
  userId: string
  episodeId: string
  parentId: string | null
  content: string
}
