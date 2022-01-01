import express from "express"
import { episodeController } from "../controllers/episode"
import { isAuth } from "../utils/middleware/isAuth"
import { requireAuth } from "../utils/middleware/requireAuth"

const router = express.Router()

router.get("/episode/:id", async (req, res) => {
  const { id } = req.params
  const episode = await episodeController.findById(id)

  res.json(episode)
})

router.get("/user/:userId/episodes", async (req, res) => {
  const { userId } = req.params
  const episodes = await episodeController.findAllByUserId(userId)

  res.json(episodes)
}) 

router.post("/episode", isAuth, requireAuth, async (req, res) => {
  const { title, description, url } = req.body
  const episode = await episodeController.create(req.currentUser!, title, description, url)

  res.json(episode)
})

router.get("/episode/:id/comments", async (req, res) => {
  const { id } = req.params
  const comments = await episodeController.getComments(id)

  res.json(comments)
})

router.post("/episode/:id/comments", isAuth, requireAuth, async (req, res) => {
  const { id } = req.params
  const { content, parentId } = req.body
  const comment = await episodeController.addComment(req.currentUser!, id, parentId, content)

  res.json(comment)
})  

export { router as episodeRouter }
