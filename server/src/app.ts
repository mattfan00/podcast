import express from "express"
import "express-async-errors"
import userRouter from "./api/user/routes"
import authRouter from "./api/auth/routes"
import { errorHandler } from "./utils/middleware/errorHandler"

const app = express(),
      router = express.Router()

router.use(userRouter)
router.use(authRouter)

app.use(express.json())

app.use("/api/v1", router) 

app.use(errorHandler)

export { app }
