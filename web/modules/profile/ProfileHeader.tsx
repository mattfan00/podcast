import React from "react"
import { Avatar } from "../../components/Avatar"

export const ProfileHeader: React.FC<{}> = () => {
  return (
    <div className="mb-12 border rounded-xl">
      <div 
        className="relative w-full overflow-hidden rounded-t-xl" 
        style={{ paddingBottom: "30%" }}
      >
        <img className="absolute object-cover w-full h-full" src="bg.png" />
      </div>

      <div className="px-8 py-6">
        <div className="flex items-center mb-4">
          <Avatar size="lg" className="mr-5" />
          <div className="flex flex-col">
            <h3>Matthew Fan</h3>
            <div className="text-gray-400">36 episodes</div>
          </div>
        </div>
        <div>Currently employed. Formerly a student. Listen to my podcast for my perspectives and to follow my journey through life.</div>
      </div>
    </div>
  )
}
