import express from "express"
import { fileController } from "../controllers/file"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"
import { mediaFileStore } from "../store/mediaFile"

const router = express.Router()

const upload = multer({ storage: multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.cwd()}/files`)
  }, 

  // TODO: does this handle file names that are not url compliant?
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}_${file.originalname}`)
  }
})})

router.post("/file/upload", upload.single("audio"), async (req, res) => {
  const audioFile = req.file!

  const path = `http://localhost:8080/v1/file/get/${audioFile.filename}`

  await mediaFileStore.createMediaFile(
    audioFile.filename,
    audioFile.originalname,
    audioFile.size,
    path
  )

  res.json({
    originalFileName: audioFile.originalname,
    newFileName: audioFile.filename,
    url: path
  })
}) 

/*
router.post("/file/upload/:fileName", express.raw({ limit: "100mb"} ), async (req, res) => {
  const blob: Buffer  = req.body
  const { fileName } = req.params

  const fileDetails = await fileController.upload(fileName, blob)

  res.json(fileDetails)
}) 
*/

router.get("/file/get/:fileName", async (req, res) => {
  const { fileName } = req.params

  console.log("getting file")

  res.sendFile(fileName, { root: `${process.cwd()}/files` })
})

export { router as fileRouter }

