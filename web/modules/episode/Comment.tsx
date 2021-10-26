import React from "react"
import { CommentList } from "./CommentList"
import { Avatar } from "../../components/Avatar"
import { dateFormat } from "../../lib/dateFormat"
import { Comment as CommentType } from "../../types/comment"

interface Props {
  comment: CommentType
}

export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="mb-6 comment">
      <div className="flex">
        <Avatar size="xs" className="flex-none mr-2" />
        <div>
          <div className="mb-1">
            {comment.user.name} · {' '}
            <span className="text-gray-500">{dateFormat(comment.created)}</span>
          </div>
          {comment.content}
        </div>
      </div>
      <CommentList comments={comment.children} />
    </div>
  )
}

