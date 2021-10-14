import { User } from "../../../entity/User"

const findByUsername = async (username: string) => {
  return await User.findOne({ username }, {
    relations: ["episodes"]
  })
}

export const userStore = {
  findByUsername
}
