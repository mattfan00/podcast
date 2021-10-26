import React from "react"
import { Comment } from "./Comment"
import { Comment as CommentType } from "../../types/comment"

interface Props {
  comments: CommentType[]
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="mt-6 comment-list">
      {comments && comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  )
}
