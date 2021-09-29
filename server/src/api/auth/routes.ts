import express from "express"
import * as authController from "./controller"

const router = express.Router()

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body
  const { user, accessToken } = await authController.login(email, password) 

  res.cookie("at", accessToken, {
    signed: false,
    httpOnly: true,
    secure: false,
  })

  res.json(user)
})

router.post("/auth/register", async (req, res) => {
  const { email, name, username, password } = req.body
  const { user, accessToken } = await authController.register(email, name, username, password) 

  res.cookie("at", accessToken, {
    signed: false,
    httpOnly: true,
    secure: false,
  })

  res.json(user)
})

router.get("/auth/me", async (req, res) => {
  const user = req.currentUser ? await authController.me(req.currentUser) : null
  res.json(user)
}) 

export default router
