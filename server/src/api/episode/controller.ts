import { episodeStore } from "./store/episode"

const create = async (title: string, description: string) => {
  const lengthSeconds = Math.floor(Math.random() * 100) + 100;
  const newEpisode = await episodeStore.create(title, description, lengthSeconds)

  return newEpisode
}

export const episodeController = {
  create
}
