import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { CurrentUser } from "../../types/user"

export const isAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies["at"]
  if (!accessToken) {
    next()
  }

  try {
    const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as CurrentUser
    req.currentUser = payload
  } catch (_) {}

  next()
}
