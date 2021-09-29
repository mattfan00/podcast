import { User } from "../../../entity/User"

export const findById = async (id: string) => {
  return await User.findOne({ id })
}

export const findByEmail = async (email: string) => {
  return await User.findOne({ email })
}

export const findByUsername = async (username: string) => {
  return await User.findOne({ username })
}

export const create = async (email: string, name: string, username: string, password: string) => {
  const newUser = User.create({ email, name, username, password })
  await newUser.save()

  return newUser
}
