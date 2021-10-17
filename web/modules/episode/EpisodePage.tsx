import React from "react"
import { Episode } from "../../types/episode"
import { Avatar } from "../../components/Avatar"
import { PlayButton } from "../../components/PlayButton"
import { dateFormat } from "../../lib/dateFormat"
import { convertDuration } from "../../lib/convertDuration"

interface Props {
  episode: Episode
}

export const EpisodePage: React.FC<Props> = ({ episode }) => {
  const comments = [
    {
      "author": "matthew fan",
      "content": "hello this is a great post!"
    },
    {
      "author": "john smith",
      "content": "hello, this was a very enlightening thing to hear and i love it, thank you for sharing with us! I really liked it when you were talking about the very important thing your entire episode was based around. i learned a lot!"
    },
    {
      "author": "matthew fan",
      "content": "this was horrible"
    }
  ]

  return (
    <>
      <div className="mb-20">
        <div className="flex items-center mb-1">
          <Avatar size="xs" className="mr-2" />
          {episode.user!.name}
        </div>
        <h2 className="mb-3">{episode.title}</h2>
        <div className="mb-5">{episode.description}</div>
        <div className="flex items-center">
          <PlayButton className="mr-3" />
          <div className="text-xs text-gray-500">{dateFormat(episode.created)} · {convertDuration(episode.lengthSeconds)} min</div>
        </div>
      </div>

      <div>
        {comments.map(comment => (
        <div className="flex mb-8">
          <Avatar size="xs" className="flex-none mr-2" />
          <div>
            <div className="text-gray-500 mb-2">{comment.author}</div>
            {comment.content}
          </div>
        </div>
        ))} 
      </div>
    </>
  )
}
