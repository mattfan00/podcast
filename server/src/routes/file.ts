import express from "express"
import { fileController } from "../controllers/file"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"
import { s3 } from "../utils/s3"
import fs from "fs"

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

  const s3Data = await s3.upload({
    filename: audioFile.filename,
    body: fs.createReadStream(audioFile.path)
  })

  console.log(s3Data)

  const details = await fileController.upload(
    audioFile.filename,
    audioFile.originalname,
    audioFile.size
  )

  res.json(details)
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

