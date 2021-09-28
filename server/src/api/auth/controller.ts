import * as userStore from "./store/user"
import { hash, compare } from "../../utils/password"

export const login = async (email: string, password: string) => {
  const foundUser = await userStore.findByEmail(email)
  if (!foundUser) {
    throw new Error("invalid credentials")
  }

  const passwordsMatch = await compare(password, foundUser.password)
  if (!passwordsMatch) {
    throw new Error("invalid credentials")
  }

  return foundUser
}

export const register = async (email: string, name: string, username: string, password: string) => {
  if (await userStore.findByEmail(email)) {
    throw new Error("email in use") 
  }

  if (await userStore.findByUsername(username)) {
    throw new Error("username in use") 
  }

  const hashedPassword = await hash(password)
  const newUser = await userStore.create(email, name, username, hashedPassword) 

  return newUser
}
