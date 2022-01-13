import * as dotenv from "dotenv"

export interface Config {
  PG_CONN: string
  
  AWS_BUCKET_NAME: string
  AWS_BUCKET_REGION: string
  AWS_ACCESS_KEY: string
  AWS_SECRET_KEY: string

  JWT_ACCESS_SECRET: string
} 

export let config: Config

export const initConfig = () => {
  const result = dotenv.config()

  if (result.error) {
    throw result.error
  }

  if (result.parsed) {
    const env = result.parsed

    if (
      !env.PG_CONN ||

      !env.AWS_BUCKET_NAME ||
      !env.AWS_BUCKET_REGION ||
      !env.AWS_ACCESS_KEY ||
      !env.AWS_SECRET_KEY || 

      !env.JWT_ACCESS_SECRET
    ) 
      throw new Error("Missing environment variable(s)")
    else 
      config = {
        PG_CONN: env.PG_CONN,
        AWS_BUCKET_NAME: env.AWS_BUCKET_NAME,
        AWS_BUCKET_REGION: env.AWS_BUCKET_REGION,
        AWS_ACCESS_KEY: env.AWS_ACCESS_KEY, 
        AWS_SECRET_KEY: env.AWS_SECRET_KEY,
        JWT_ACCESS_SECRET: env.JWT_ACCESS_SECRET,
      }
  }
}
