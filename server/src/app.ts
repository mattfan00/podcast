import express from "express"
import userRouter from "./api/user/routes"
import authRouter from "./api/auth/routes"

const app = express(),
      router = express.Router()

router.use(userRouter)
router.use(authRouter)

app.use(express.json())

app.use("/api/v1", router) 

export { app }
