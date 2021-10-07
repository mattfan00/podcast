import React, { useState, createContext } from "react"
import { User } from "../types/user"
import { useQuery } from "react-query"

export const AuthContext = createContext<{
  user: User | null
  setUser: (u: User) => void
  isLoading: boolean
}>({
  user: null,
  setUser: () => {},
  isLoading: true
})

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)
  
  const { isLoading } = useQuery(`/auth/me`, {
    onSuccess: (data) => {
      console.log(data)
    }
  }) 

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
