import express from "express"
import * as userController from "./controller"

const router = express.Router()

router.get("/user/:id", async (req, res) => {
  const foundUser = await userController.view(req.params.id) 

  res.send(foundUser)
})

export default router
