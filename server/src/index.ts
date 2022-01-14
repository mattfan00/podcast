import { config } from "./utils/config"
import { app } from "./app"
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User"
import { Episode } from "./entity/Episode"
import { Comment } from "./entity/Comment"
import { MediaFile } from "./entity/MediaFile"
import { s3 } from "./utils/s3"

const start = async () => {
  s3.init({
    region: config.AWS_BUCKET_REGION,
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_KEY,

    defaultBucket: config.AWS_BUCKET_NAME
  })

  await createConnection({
    type: 'postgres',
    url: config.PG_CONN,
    entities: [
      User, 
      Episode,
      Comment,
      MediaFile,
    ],
    synchronize: true
  })

  app.listen(8080, () => {
    console.log("app listening on port 8080")
  })
}

start()
