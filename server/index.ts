import { app } from "./app"

const start = () => {
  app.listen(8080, () => {
    console.log("app listening on port 8080")
  })
}

start()
