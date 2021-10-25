export enum StatusCodes {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

export class HTTPError extends Error {
  statusCode: number

  constructor(statusCode: StatusCodes, message: string) {
    super(message)

    this.statusCode = statusCode
  }
}

export class BadRequestError extends HTTPError {
  constructor(message = "Bad request") {
    super(StatusCodes.BadRequest, message)
  }
}

export class UnauthorizedError extends HTTPError {
  constructor(message = "Unauthorized") {
    super(StatusCodes.Unauthorized, message)
  }
}

export class NotFoundError extends HTTPError {
  constructor(message = "Not found") {
    super(StatusCodes.NotFound, message)
  }
}

export class InternalServerError extends HTTPError {
  constructor(message = "Internal server error") {
    super(StatusCodes.InternalServerError, message)
  }
}
