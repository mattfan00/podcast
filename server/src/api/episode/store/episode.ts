import { Episode } from "../../../entity/Episode"

const findById = async (id: string) => {
  return await Episode.findOne(id)
}

const create = async (title: string, description: string, lengthSeconds: number) => {
  const newEpisode = Episode.create({ 
    title,
    description,
    length_seconds: lengthSeconds
  })
  await newEpisode.save()

  return newEpisode
}

export const episodeStore = {
  findById,
  create
}

