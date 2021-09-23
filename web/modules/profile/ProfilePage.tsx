import React from "react"
import { ProfileHeader } from "./ProfileHeader"
import { Button } from "../../ui"
import { PlayButton } from "../../components/PlayButton"

export const ProfilePage: React.FC<{}> = () => {
  const episodes = [
    {
      "title": "This is my life",
      "description": "A short description of the episode"
    },
    {
      "title": "Reflections on College",
      "description": "What was my experience like in college? It was good."
    },
    {
      "title": "This is my first episode",
      "description": "My first episode on this platform. Today we are going to be talking about why I decided to make a podcast, why I made this platform, and some quick snippets about me."
    },
    {
      "title": "Last one",
      "description": "This is the last podcast in the list of my example podcasts"
    },
  ]

  return (
    <>
      <ProfileHeader />

      <div className="flex items-center justify-between mb-3">
        <h3>Episodes</h3>
        <Button>Newest to Oldest</Button>
      </div>

      {episodes.map(episode => (
      <div className="px-4 py-4 mb-4 -mx-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
        <h5>{episode.title}</h5>
        <div>{episode.description}</div>
        <div className="mt-4 text-sm">Matthew Fan</div>
        <div className="flex items-center mt-2">
          <PlayButton className="mr-3" />
          <div className="text-sm text-gray-400">Sep 21, 2021 · 33 min</div>
        </div>
      </div>
      ))}

    </>
  )
}
