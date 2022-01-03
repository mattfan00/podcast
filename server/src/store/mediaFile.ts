import { MediaFile } from "../entity/MediaFile"

const createMediaFile = async (
  fileName: string, 
  originalFileName: string, 
  size: number, path: string, 
) => {
  const newMediaFile = MediaFile.create({
    fileName,
    originalFileName,
    size,
    path,
  })

  await newMediaFile.save()

  return newMediaFile
}

export const mediaFileStore = { 
  createMediaFile,
}
