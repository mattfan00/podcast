import fs from "fs"
import { mediaFileStore } from "../store/mediaFile"

const upload = async (
  newFileName: string, 
  originalFileName: string,
  size: number,
) => {
  const path = `http://localhost:8080/v1/file/get/${newFileName}`

  await mediaFileStore.createMediaFile(
    newFileName,
    originalFileName,
    size,
    path
  )

  return {
    originalFileName,
    newFileName,
    url: path
  }
}

export const fileController = {
  upload
}
