import express from "express"
import userRouter from "./api/user/routes"

const app = express(),
      router = express.Router()

router.use(userRouter)

app.use("/api/v1", router) 

export { app }
