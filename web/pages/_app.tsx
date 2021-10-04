import { AppProps } from "next/app"
import { AuthProvider } from "../contexts/Auth"

import "../styles/globals.css"
import "../fontawesome"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
