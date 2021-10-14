import { User } from "../../../entity/User"

const findById = async (id: string) => {
  return await User.findOne({ id })
}

const findByEmail = async (email: string) => {
  return await User.findOne({ email })
}

const findByUsername = async (username: string) => {
  return await User.findOne({ username })
}

const create = async (email: string, name: string, username: string, password: string) => {
  const newUser = User.create({ email, name, username, password })
  await newUser.save()

  return newUser
}

export const userStore = {
  findById,
  findByEmail,
  findByUsername,
  create
}
