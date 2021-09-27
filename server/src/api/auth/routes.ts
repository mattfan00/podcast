import express from "express"
import * as authController from "./controller"

const router = express.Router()

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body
  const foundUser = await authController.login(email, password) 

  res.json(foundUser)
})

router.post("/auth/register", async (req, res) => {
  const { email, name, username, password } = req.body
  const newUser = await authController.register(email, name, username, password) 

  res.json(newUser)
})

export default router
