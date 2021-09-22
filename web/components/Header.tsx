import React from "react"
import { Logo } from "../icons/Logo"
import { Button } from "../ui"
import { Avatar } from "../components/Avatar"

export const Header: React.FC<{}> = () => {
  return (
    <header className="w-screen px-8">
      <div className="flex items-center justify-between py-6 mx-auto max-w-7xl">
        <Logo className="w-32 mr-4" />

        <div className="flex-1 max-w-md">
          <input 
            className="bg-gray-100 rounded px-3 py-1.5 focus:outline-none text-sm w-full" 
            placeholder="Search"
          />
        </div>

        <div className="flex items-center ml-4">
          <Button variant="dark">Upload</Button>
          <Avatar className="ml-4" />
        </div>
      </div>
    </header>
  )
}
