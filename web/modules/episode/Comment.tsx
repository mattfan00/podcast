import React, { useState } from "react"
import { CommentList } from "./CommentList"
import { Avatar } from "../../components/Avatar"
import { dateFormat } from "../../lib/dateFormat"
import { Comment as CommentType } from "../../types/comment"
import { TextArea, Button } from "../../ui"
import { PostCommentFields } from "../../types/comment"
import { clientQuery } from "../../lib/axios"
import { queryClient } from "../../lib/query"
import { useMutation } from "react-query"
import { useAuth } from "../../hooks/useAuth"

interface Props {
  comment: CommentType
}

export const Comment: React.FC<Props> = ({ comment }) => {
  const [showComment, setShowComment] = useState<boolean>(false)
  const [commentText, setCommentText] = useState<string>("")
  const { user } = useAuth()

  const hideCommentBox = () => {
    setShowComment(false)
    setCommentText("")
  }

  const commentMutation = useMutation((fields: PostCommentFields) =>
    clientQuery.post(`/episode/${comment.episodeId}/comments`, fields)
  )

  const onSubmit = async () => {
    try {
      if (commentText != "") {
        await commentMutation.mutateAsync({
          userId: user!.id,
          episodeId: comment.episodeId,
          parentId: comment.parentId,
          content: commentText
        })

        queryClient.invalidateQueries(`/episode/${comment.episodeId}/comments`)
        hideCommentBox()
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="mb-6 comment">
      <div className="flex">
        <Avatar size="xs" className="flex-none mr-2" />
        <div className="flex-1">
          <div className="mb-1">
            {comment.user.name} · {' '}
            <span className="text-gray-500">{dateFormat(comment.created)}</span>
          </div>
          <div className="mb-2">{comment.content}</div>
          {user ? (
            !showComment ? (
            <div 
              onClick={() => setShowComment(true)}
              className="text-xs text-gray-500 cursor-pointer"
            >Reply</div>
            ) : (
            <div>
              <TextArea 
                placeholder="Reply..."
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setCommentText(e.target.value)
                }}
                value={commentText}
                fullWidth 
                className="mb-2"
                autoFocus
              />
              <div className="flex justify-end">
                <Button 
                  variant="plain"
                  className="mr-1"
                  onClick={hideCommentBox}
                >Cancel</Button>
                <Button
                  onClick={onSubmit}
                  disabled={commentText == ""}
                >Submit</Button>
              </div>
            </div>
            )
          ) : ""}
        </div>
      </div>
      <CommentList comments={comment.children} />
    </div>
  )
}

