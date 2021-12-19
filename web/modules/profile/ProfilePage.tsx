import React from "react"
import { useRouter } from "next/router"
import { ProfileHeader } from "./ProfileHeader"
import { Button } from "../../ui"
import { PlayButton } from "../../components/PlayButton"
import { User } from "../../types/user"
import { dateFormat } from "../../lib/dateFormat"
import { convertDuration } from "../../lib/convertDuration"
import { useQuery } from "react-query"
import { Episode } from "../../types/episode"
import { useCurrentEpisodeStore } from "../../globalStore/useCurrentEpisodeStore"

interface Props {
  profile: User
}

export const ProfilePage: React.FC<Props> = ({ profile }) => {
  const router = useRouter()
  const setEpisode = useCurrentEpisodeStore(state => state.setCurrentEpisode)
  const currentEpisode = useCurrentEpisodeStore(state => state.currentEpisode)

  const { data } = useQuery(`/user/${profile.username}`, { 
    initialData: profile
  })

  const handlePlay = (episode: Episode) => {
    setEpisode(episode)
  }

  return (
    <>
      <ProfileHeader profile={data!} />

      <div className="flex items-center justify-between mb-6">
        <h3>Episodes</h3>
        <Button>Newest to Oldest</Button>
      </div>

      {data!.episodes!.map(episode => (
      <div 
        key={episode.id} 
        className="px-4 py-4 mb-1 -mx-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={(e) => {
          e.stopPropagation
          router.push(`/episode/${episode.id}`)
        }}
      >
        <h5>{episode.title}</h5>
        <div>{episode.description}</div>
        {/*<div className="mt-2 text-xs text-gray-500">{profile.name}</div>*/}
        <div className="flex items-center mt-2">
          <PlayButton 
            className="mr-3" 
            onClick={() => handlePlay(episode)}
          />
          <div className="text-xs text-gray-500">{dateFormat(episode.created)} · {convertDuration(episode.lengthSeconds)} min</div>
        </div>
      </div>
      ))}

    </>
  )
}
