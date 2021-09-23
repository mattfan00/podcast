import React from "react"
import { ProfileHeader } from "./ProfileHeader"
import { Button } from "../../ui"
export const ProfilePage: React.FC<{}> = () => {
  const episodes = [
    {
      "title": "This is my life",
      "description:": "A short description of the episode"
    },
    {
      "title": "Reflections on College",
      "description": "What was my experience like in college? It was good."
    },
    {
      "title": "This is my first episode",
      "description": "My very first episode on this platform. Today we are going to be talking about why I decided to make a podcast, why I made this platform, and some quick snippets about me."
    },
  ]

  return (
    <>
      <ProfileHeader />

      <div className="flex items-center justify-between">
        <h2>Episodes</h2>
        <Button>Newest to Oldest</Button>
      </div>
    </>
  )
}
