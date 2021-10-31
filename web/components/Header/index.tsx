import React from "react"
import { Logo } from "../../components/icons/Logo"
import { Avatar } from "../../components/Avatar"
import { Login } from "./Login"
import { Register } from "./Register"
import { Upload } from "./Upload"
import { useAuth } from "../../hooks/useAuth"

export const Header: React.FC<{}> = () => {
  const { user, isLoading } = useAuth()

  return (
    <header className="w-full px-8 mb-4">
      <div className="flex items-center justify-between py-6 mx-auto max-w-7xl">
        <div className="flex flex-1 mr-4">
          <Logo className="w-32 mr-4" />
        </div>

        <div className="w-full max-w-sm">
          <input 
            className="bg-gray-100 rounded px-3 py-1.5 focus:outline-none text-sm w-full" 
            placeholder="Search"
          />
        </div>

        <div className="flex items-center justify-end flex-1 ml-4">
          {!isLoading ? (
            user ? (
              <>
                <Upload />
                <Avatar className="ml-4" />
              </>
            ) : (
              <>
                <Login />
                <Register />
              </>
            )
          ) : ""}
        </div>
      </div>
    </header>
  )
}
