import React from "react"
import { useAuth } from "../hooks/useAuth"

interface Props {
  children: React.ReactNode
}

export const WaitForAuth: React.FC<Props> = ({ children }) => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <></>
  }

  return (
    <>
      {children}
    </>
  )
}
