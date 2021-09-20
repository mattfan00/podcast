import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*
          <link rel="icon" href="/logo.png" />
          */}
          <link rel="stylesheet" media="all" href="https://rsms.me/inter/inter.css" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
