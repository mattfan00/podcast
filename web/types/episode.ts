import { User } from "./user"

export interface Episode {
  id: string
  title: string
  url: string
  description: string
  durationSeconds: number
  userId: string
  user: User
  created: string
}
