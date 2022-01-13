import express from "express"
import { fileController } from "../controllers/file"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"
import AWS from "aws-sdk"
import fs from "fs"
import "dotenv/config"

const router = express.Router()

const s3 = new AWS.S3({
  region: process.env.AWS_BUCKET_REGION!,
  accessKeyId: process.env.AWS_ACCESS_KEY!,
  secretAccessKey: process.env.AWS_SECRET_KEY!
})

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
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: audioFile.filename,
    Body: fs.createReadStream(audioFile.path)
  }).promise()

  console.log(s3Data)

  const details = fileController.upload(
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

