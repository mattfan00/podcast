import AWS from "aws-sdk"

interface S3Config {
  region: string
  accessKeyId: string
  secretAccessKey: string

  defaultBucket?: string
}

interface S3UploadParams {
  bucket?: string
  filename: string
  body: AWS.S3.Body
}

class S3Service { 
  client: AWS.S3
  defaultBucket: string

  init(options: S3Config) {
    this.client = new AWS.S3({
      region: options.region,
      accessKeyId: options.accessKeyId,
      secretAccessKey: options.secretAccessKey
    })

    if (options.defaultBucket) 
      this.defaultBucket = options.defaultBucket
  }

  upload(uploadParams: S3UploadParams) {
    const bucket = uploadParams.bucket ? uploadParams.bucket : this.defaultBucket
    if (!bucket) {
      throw new Error("Error uploading file")
    }

    return this.client.upload({
      Bucket: bucket,
      Key: uploadParams.filename,
      Body: uploadParams.body
    }).promise()
  }
}

export const s3 = new S3Service()
