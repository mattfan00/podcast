import express from "express"
import "express-async-errors"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"

import { userRouter } from "./routes/user"
import { authRouter } from "./routes/auth"
import { episodeRouter } from "./routes/episode"
import { fileRouter } from "./routes/file"

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
app.use(morgan("dev"))

const router = express.Router()
router.use(userRouter)
router.use(authRouter)
router.use(episodeRouter)
router.use(fileRouter)

app.use("/v1", router) 

app.use(errorHandler)

export { app }
