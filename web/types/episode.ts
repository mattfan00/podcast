import { User } from "./user"

export interface Episode {
  id: string
  title: string
  description: string
  lengthSeconds: number
  userId: string
  user?: User
  created: string
}