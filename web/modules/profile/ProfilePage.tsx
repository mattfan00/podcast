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

      <div className="flex items-center justify-between mb-8">
        <h2>Episodes</h2>
        <Button>Newest to Oldest</Button>
      </div>

      {episodes.map(episode => (
        <div className="px-5 py-4 mb-4 -mx-5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <h4>{episode.title}</h4>
          <div>{episode.description}</div>
          <div className="mt-3 text-sm">Matthew Fan</div>
          <div className="flex items-center mt-3">
            <PlayButton className="mr-3" />
            <div className="text-sm text-gray-400">Sep 21, 2021 · 33 min</div>
          </div>
        </div>
      ))}
    </>
  )
}
