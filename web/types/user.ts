import { Episode } from "./episode"

export interface User {
  id: string
  name: string
  username: string
  bio: string | null
  avatar: string | null
  banner: string | null
  email: string
  episodes?: Episode[]
  created: string
}
