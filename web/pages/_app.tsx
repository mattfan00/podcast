import { AppProps } from "next/app"

import "../styles/globals.css"
import "../fontawesome"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
