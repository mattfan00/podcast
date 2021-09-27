import * as userStore from "./store/user"

export const login = async (email: string, password: string) => {
  const foundUser = await userStore.findByEmail(email)
  if (!foundUser) {
    throw new Error("invalid credentials")
  }

  if (password != foundUser.password) {
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

  const newUser = await userStore.create(email, name, username, password) 

  return newUser
}
