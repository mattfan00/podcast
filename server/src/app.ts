import express from "express"
import "express-async-errors"
import cors from "cors"
import cookieParser from "cookie-parser"

import { userRouter } from "./api/user/routes"
import { authRouter } from "./api/auth/routes"
import { errorHandler } from "./utils/middleware/errorHandler"

import { CurrentUser } from "./types/user"

declare global {
  namespace Express {
    interface Request {
      currentUser?: CurrentUser
    }
  }
}

const app = express()

app.use(express.json())
app.use(cors({
  origin: ["http://localhost:3000"],
  //origin: true,
  credentials: true
}))
app.use(cookieParser())

const router = express.Router()
router.use(userRouter)
router.use(authRouter)

app.use("/v1", authRouter) 

app.use(errorHandler)

export { app }
