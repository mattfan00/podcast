import express from "express"
import "express-async-errors"
import cors from "cors"
import cookieParser from "cookie-parser"

import userRouter from "./api/user/routes"
import authRouter from "./api/auth/routes"
import { errorHandler } from "./utils/middleware/errorHandler"

import { UserPayload } from "./types/user"

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload
    }
  }
}

const app = express(),
      router = express.Router()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

router.use(userRouter)
router.use(authRouter)

app.use("/api/v1", router) 

app.use(errorHandler)

export { app }
