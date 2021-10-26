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
