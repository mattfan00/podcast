import { getRepository } from "typeorm"
import { Comment } from "../entity/Comment"

const create = async (content: string, episodeId: string, parentId: string, userId: string) => {
  const newComment = Comment.create({ 
    content, 
    episodeId,
    parentId,
    userId 
  })
  await newComment.save()

  return newComment
}

const findByEpisodeId = async (episodeId: string) => {
  const foundComments = await getRepository(Comment)
    .createQueryBuilder("comment")
    .leftJoinAndSelect("comment.user", "user")
    .select(["comment", "user.id", "user.name", "user.username", "user.avatar"])
    .where("comment.episodeId = :episodeId", { episodeId })
    .orderBy("comment.created", "DESC")
    .getMany()

  return foundComments
}

const findById = async (id: string) => {
  const foundComment = await Comment.findOne({ id })

  return foundComment
}

export const commentStore = {
  create,
  findByEpisodeId,
  findById
}
