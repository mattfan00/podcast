import React, { useState, useEffect, createContext } from "react"
import { User } from "../types/user"
import axios from "axios"

export const AuthContext = createContext<{
  user: User | null
  setUser: (u: User) => void
}>({
  user: null,
  setUser: () => {},
})

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)

  /*
  useEffect(() => {
    const getUser = async () => {
      const result = await axios.get("localhost:8080/v1/auth/me")

      setUser(result.data)
    }

    getUser()
  })
   */

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        //isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
