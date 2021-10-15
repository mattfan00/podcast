import React from "react"
import { ProfileHeader } from "./ProfileHeader"
import { Button } from "../../ui"
import { PlayButton } from "../../components/PlayButton"
import { User } from "../../types/user"

interface Props {
  profile: User
}

export const ProfilePage: React.FC<Props> = ({ profile }) => {
  return (
    <>
      <ProfileHeader profile={profile} />

      <div className="flex items-center justify-between mb-6">
        <h3>Episodes</h3>
        <Button>Newest to Oldest</Button>
      </div>

      {profile.episodes!.map(episode => (
      <div key={episode.title} className="px-4 py-4 mb-1 -mx-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
        <h5>{episode.title}</h5>
        <div>{episode.description}</div>
        <div className="mt-2 text-xs text-gray-500">Matthew Fan</div>
        <div className="flex items-center mt-2">
          <PlayButton className="mr-3" />
          <div className="text-xs text-gray-500">Sep 21, 2021 · 33 min</div>
        </div>
      </div>
      ))}

    </>
  )
}
