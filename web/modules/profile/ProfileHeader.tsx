import React from "react"
import { Avatar } from "../../components/Avatar"
import { User } from "../../types/user"

interface Props {
  profile: User
}

export const ProfileHeader: React.FC<Props> = ({ profile }) => {
  return (
    <div className="mb-10 border rounded-xl">
      <div 
        className="relative w-full overflow-hidden rounded-t-xl" 
        style={{ paddingBottom: "30%" }}
      >
        <img className="absolute object-cover w-full h-full" src="bg.png" />
      </div>

      <div className="px-8 py-6">
        <div className="flex items-center mb-4">
          <Avatar size="lg" className="mr-4" />
          <div className="flex flex-col">
            <h2>{profile.name}</h2>
            {/* <div className="text-gray-400">36 episodes</div> */}
          </div>
        </div>
        <div>{profile.bio}</div>
      </div>
    </div>
  )
}
