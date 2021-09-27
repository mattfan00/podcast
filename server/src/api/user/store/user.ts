import { User } from "../../../entity/User"

export const findById = async (id: string) => {
  return await User.findOne(id)
}
