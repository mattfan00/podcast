import { Request, Response, NextFunction } from "express"
import { HTTPError } from "../errors"

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err)

  if (err instanceof HTTPError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  return res.status(500).json({ message: err.message })
}
