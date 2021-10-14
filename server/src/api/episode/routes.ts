import express from "express"
import { episodeController } from "./controller"
import { isAuth } from "../../utils/middleware/isAuth"
import { requireAuth } from "../../utils/middleware/requireAuth"

const router = express.Router()

router.get("/episode/:id", async (req, res) => {
  const { id } = req.params
  const episode = await episodeController.findById(id)

  res.json(episode)
})

router.post("/episode", isAuth, requireAuth, async (req, res) => {
  const { title, description } = req.body
  const episode = await episodeController.create(req.currentUser!, title, description)

  res.json(episode)
})

export { router as episodeRouter }
