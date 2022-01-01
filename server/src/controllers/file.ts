import fs from "fs"
import { v4 as uuidv4 } from "uuid"

const upload = async (fileName: string, blob: Buffer) => {
  const id = uuidv4()

  await fs.promises.appendFile(`files/${id}`, blob)

  return {
    id,
    fileName,
    url: `/file/get/${id}`
  }
}

export const fileController = {
  upload
}
