import express from "express"
import "express-async-errors"
import cors from "cors"
import cookieParser from "cookie-parser"

import userRouter from "./api/user/routes"
import authRouter from "./api/auth/routes"
import { errorHandler } from "./utils/middleware/errorHandler"

import { CurrentUser } from "./types/user"

declare global {
  namespace Express {
    interface Request {
      currentUser?: CurrentUser
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

app.use("/v1", router) 

app.use(errorHandler)

export { app }
