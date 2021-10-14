import { episodeStore } from "./store/episode"
import { CurrentUser } from "../../types/user"

const findById = async (id: string) => {
  const foundEpisode = await episodeStore.findById(id)

  return foundEpisode 
}

const create = async (user: CurrentUser, title: string, description: string) => {
  const lengthSeconds = Math.floor(Math.random() * 100) + 100;
  const newEpisode = await episodeStore.create(title, description, lengthSeconds, user.id)

  return newEpisode
}

export const episodeController = {
  findById,
  create
}
