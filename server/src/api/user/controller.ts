import * as userStore from "./store/user"

export const view = async (id: string) => {
  const foundUser = await userStore.findById(id)
  if (!foundUser) {
    throw new Error("user not found")
  }

  return foundUser
}
