import * as userStore from "./store/user"
import { BadRequestError } from "../../utils/errors"

export const view = async (id: string) => {
  const foundUser = await userStore.findById(id)
  if (!foundUser) {
    throw new BadRequestError("User not found")
  }

  return foundUser
}
