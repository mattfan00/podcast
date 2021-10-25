import { episodeStore } from "./store/episode"
import { commentStore } from "./store/comment"
import { CurrentUser } from "../../types/user"
import { NotFoundError } from "../../utils/errors"

const findById = async (id: string) => {
  const foundEpisode = await episodeStore.findById(id)

  return foundEpisode 
}

const create = async (user: CurrentUser, title: string, description: string) => {
  const lengthSeconds = Math.floor(Math.random() * 1000) + 100;
  const newEpisode = await episodeStore.create(title, description, lengthSeconds, user.id)

  return newEpisode
}

const getComments = async (episodeId: string) => {
  const foundComments = await commentStore.findByEpisodeId(episodeId)

  const structuredComments = foundComments
    .filter(comment => !comment.parentId)
    .map(comment => {
      comment.children = foundComments.filter(c => comment.id == c.parentId)
      comment.children.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
      return comment
    })

  return structuredComments
}

const addComment = async (user: CurrentUser, episodeId: string, parentId: string, content: string) => {
  // check if the parentId being assigned is valid
  if (parentId) {
    const foundComment = await commentStore.findById(parentId) 
    if (!foundComment) {
      throw new NotFoundError("parentId does not exist")
    }
  }

  const newComment = commentStore.create(content, episodeId, parentId, user.id)

  return newComment
}

export const episodeController = {
  findById,
  create,
  getComments,
  addComment
}
