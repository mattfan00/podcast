import { Episode } from "../entity/Episode"

const findById = async (id: string) => {
  return await Episode.findOne(id, { 
    relations: ["user"],
  })
}

const findAllByUserId = async (userId: string) => {
  return await Episode.find({ 
    where: { userId },
    relations: ["user"],
    order: { created: "DESC" }
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
  findAllByUserId,
  create
}

