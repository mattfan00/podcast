import React from "react"
import { CommentList } from "./CommentList"
import { Avatar } from "../../components/Avatar"
import { PlayButton } from "../../components/PlayButton"
import { dateFormat } from "../../lib/dateFormat"
import { convertDuration } from "../../lib/convertDuration"
import { useQuery } from "react-query"
import { Comment } from "../../types/comment"
import { Episode } from "../../types/episode"

interface Props {
  episode: Episode
}

export const EpisodePage: React.FC<Props> = ({ episode }) => {
  const { data: comments, isLoading } = useQuery<Comment[]>(`/episode/${episode.id}/comments`)


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

      {!isLoading ? (
      <div>
        <CommentList comments={comments!} />
      </div>
      ) : ""}
    </>
  )
}
