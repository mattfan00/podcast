import { app } from "./app"
import "dotenv/config"

import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User"
import { Episode } from "./entity/Episode"
import { Comment } from "./entity/Comment"

const start = async () => {
  await createConnection({
    type: 'postgres',
    url: process.env.PG_CONN,
    entities: [
      User, 
      Episode,
      Comment,
    ],
    synchronize: true
  })

  app.listen(8080, () => {
    console.log("app listening on port 8080")
  })
}

start()
