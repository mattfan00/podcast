import express from "express"
import * as userController from "./controller"

const router = express.Router()

router.get("/user/:id", (req, res) => {
  const value = userController.get(req.params.id) 
  res.send(value)
})

export default router
