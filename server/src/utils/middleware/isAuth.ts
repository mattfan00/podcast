import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { UserPayload } from "../../types/user"

export const isAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies["at"]
  if (!accessToken) {
    throw new Error("token not available")
  }

  const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as UserPayload
  req.currentUser = payload

  next()
}
