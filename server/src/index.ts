import { app } from "./app"
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User"
import { Episode } from "./entity/Episode"
import { Comment } from "./entity/Comment"
import { MediaFile } from "./entity/MediaFile"
import { config, initConfig } from "./utils/config"
import { initS3 } from "./utils/s3"

const start = async () => {
  initConfig()
  initS3()

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
