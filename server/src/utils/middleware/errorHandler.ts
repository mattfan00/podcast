import { Request, Response, NextFunction } from "express"
import { HTTPError } from "../errors"

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HTTPError) {
    res.status(err.statusCode).json({ message: err.message })
  }

  res.status(500).json({ message: err.message })
}
