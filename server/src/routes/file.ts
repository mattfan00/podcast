import express from "express"
import { fileController } from "../controllers/file"
import formidable from "formidable"

const router = express.Router()

router.post("/file/upload", async (req, res) => {
  const form = formidable({
    keepExtensions: true,
    uploadDir: `${process.cwd()}/files`,
    allowEmptyFiles: false
  })

  form.parse(req, (err, _, files) => {
    if (err) {
      throw new Error(err)
    }

    const file = files.file as formidable.File

    res.json({
      fileName: file.originalFilename,
      id: file.newFilename,
      url: `/file/${file.newFilename}`
    })
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

