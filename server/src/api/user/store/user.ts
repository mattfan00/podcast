import { getRepository } from "typeorm"
import { User } from "../../../entity/User"

const findByUsername = async (username: string) => {
  return await getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.episodes", "episodes")
    .where("user.username = :username", { username })
    .orderBy("episodes.created", "DESC")
    .getOne()
}

export const userStore = {
  findByUsername
}
