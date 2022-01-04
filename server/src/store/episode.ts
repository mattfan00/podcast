import { getConnection } from "typeorm"
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
  durationSeconds: number,
  url: string,
  userId: string
) => {
  console.log(durationSeconds)
  const newEpisode = Episode.create({ 
    title,
    description,
    durationSeconds,
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

