import express from "express"
import { userController } from "./controller"

const router = express.Router()

router.get("/user/:username", async (req, res) => {
  const { username } = req.params
  const foundUser = await userController.view(username) 

  res.send(foundUser)
})

export { router as userRouter }
