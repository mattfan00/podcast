import { Episode } from "../entity/Episode"

const findById = async (id: string) => {
  return await Episode.findOne(id, { 
    relations: ["user"],
  })
}

const create = async (
  title: string, 
  description: string, 
  lengthSeconds: number,
  url: string,
  userId: string
) => {
  const newEpisode = Episode.create({ 
    title,
    description,
    lengthSeconds,
    url,
    userId
  })
  await newEpisode.save()

  return newEpisode
}

export const episodeStore = {
  findById,
  create
}

