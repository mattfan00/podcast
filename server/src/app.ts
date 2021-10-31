import express from "express"
import "express-async-errors"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"

import { userRouter } from "./api/user/routes"
import { authRouter } from "./api/auth/routes"
import { episodeRouter } from "./api/episode/routes"
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

app.use("/v1", router) 

app.post("/v1/upload", 
  express.raw({
    limit: "100mb"
  }),
  (req, res) => {
  console.log(req.body)

  res.send("hey")
}) 

app.use(errorHandler)

export { app }
