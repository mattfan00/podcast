import { User } from "../../../entity/User"

const findById = async (id: string) => {
  return await User.findOne(id)
}

export const userStore = {
  findById
}
