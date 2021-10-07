import { BASE_URL } from "./constants"
import axios from "axios"

export const clientQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})
