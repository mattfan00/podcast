import { AppProps } from "next/app"
import { AuthProvider } from "../contexts/Auth"
import { QueryClientProvider } from "react-query"
import { queryClient } from "../lib/query"
import { PlayBar } from "../components/PlayBar"

import "../styles/globals.css"
import "../fontawesome"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />

        <PlayBar />
      </AuthProvider>
    </QueryClientProvider>
  )
}
export default MyApp
