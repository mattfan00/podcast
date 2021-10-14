import { userStore } from "./store/user"
import { BadRequestError } from "../../utils/errors"

const view = async (username: string) => {
  const foundUser = await userStore.findByUsername(username)
  if (!foundUser) {
    throw new BadRequestError("User not found")
  }

  return foundUser
}

export const userController = {
  view
}
