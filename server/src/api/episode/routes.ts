import express from "express"
import { episodeController } from "./controller"
import { isAuth } from "../../utils/middleware/isAuth"

const router = express.Router()

router.post("/episode", isAuth, async (req, res) => {
  const { title, description } = req.body
  const episode = await episodeController.create(title, description)

  res.json(episode)
})

export { router as episodeRouter }
