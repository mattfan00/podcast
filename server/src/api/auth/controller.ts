import * as userStore from "./store/user"
import { hash, compare } from "../../utils/password"
import { BadRequestError, UnauthorizedError } from "../../utils/errors"
import jwt from "jsonwebtoken"

export const login = async (email: string, password: string) => {
  const foundUser = await userStore.findByEmail(email)
  if (!foundUser) {
    throw new UnauthorizedError("Invalid credentials")
  }

  const passwordsMatch = await compare(password, foundUser.password)
  if (!passwordsMatch) {
    throw new UnauthorizedError("Invalid credentials")
  }

  const accessToken = jwt.sign({
    id: foundUser.id
  }, process.env.JWT_ACCESS_SECRET!)

  return {
    user: foundUser,
    accessToken
  }
}

export const register = async (email: string, name: string, username: string, password: string) => {
  if (await userStore.findByEmail(email)) {
    throw new BadRequestError("Email already in use") 
  }

  if (await userStore.findByUsername(username)) {
    throw new BadRequestError("Username already in use") 
  }

  const hashedPassword = await hash(password)
  const newUser = await userStore.create(email, name, username, hashedPassword) 
  
  const accessToken = jwt.sign({
    id: newUser.id
  }, process.env.JWT_ACCESS_SECRET!)

  return {
    user: newUser,
    accessToken
  }
}
