import AWS from "aws-sdk"
import { config } from "./config"

export let s3 = new AWS.S3()

export const initS3 = () => {
  s3 = new AWS.S3({
    region: config.AWS_BUCKET_REGION,
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_KEY
  })
}
