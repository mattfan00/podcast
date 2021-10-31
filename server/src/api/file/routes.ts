import express from "express"
import { fileController } from "./controller"

const router = express.Router()

router.post("/file/upload/:fileName", express.raw({ limit: "100mb"} ), async (req, res) => {
  const blob: Buffer  = req.body
  const { fileName } = req.params

  const fileDetails = await fileController.upload(fileName, blob)

  res.json(fileDetails)
}) 

router.get("/file/get/:fileName", async (req, res) => {
  const { fileName } = req.params

  res.sendFile(fileName, { root: `${process.cwd()}/files` })
})

export { router as fileRouter }
