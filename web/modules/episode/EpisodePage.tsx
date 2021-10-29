import React, { useState } from "react"
import { CommentList } from "./CommentList"
import { Avatar } from "../../components/Avatar"
import { PlayButton } from "../../components/PlayButton"
import { dateFormat } from "../../lib/dateFormat"
import { convertDuration } from "../../lib/convertDuration"
import { useQuery } from "react-query"
import { Comment } from "../../types/comment"
import { Episode } from "../../types/episode"
import { useAuth } from "../../hooks/useAuth"
import { TextArea, Button } from "../../ui"
import { PostCommentFields } from "../../types/comment"
import { clientQuery } from "../../lib/axios"
import { queryClient } from "../../lib/query"
import { useMutation } from "react-query"

interface Props {
  episode: Episode
}

export const EpisodePage: React.FC<Props> = ({ episode }) => {
  const { data: comments, isLoading } = useQuery<Comment[]>(`/episode/${episode.id}/comments`)
  const [commentText, setCommentText] = useState<string>("")
  const { user } = useAuth()

  const commentMutation = useMutation((fields: PostCommentFields) =>
    clientQuery.post(`/episode/${episode.id}/comments`, fields)
  )

  const onSubmit = async () => {
    try {
      if (commentText != "") {
        await commentMutation.mutateAsync({
          userId: user!.id,
          episodeId: episode.id,
          parentId: null,
          content: commentText
        })

        queryClient.invalidateQueries(`/episode/${episode.id}/comments`)
        setCommentText("")
      }
    } catch (e) {
      console.error(e)
    }
  }


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

      {user ? (
      <div className="mb-4">
        <TextArea 
          placeholder="Write a comment..."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setCommentText(e.target.value)
          }}
          value={commentText}
          fullWidth 
          className="mb-2"
        />
        <div className="flex justify-end">
          <Button
            onClick={onSubmit}
            disabled={commentText == ""}
          >Submit</Button>
        </div>
      </div>
      ) : ""}

      {!isLoading ? (
      <div>
        <CommentList comments={comments!} />
      </div>
      ) : ""}
    </>
  )
}
