import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Cinzel&family=Fira+Sans"
          />
          {/* <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.9.1/dist/css/uikit.min.css"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.9.0/js/uikit.min.js"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.9.1/dist/js/uikit-icons.min.js"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.9.1/dist/js/uikit.min.js"
          /> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossOrigin="anonymous"
          />
          <script async src="//widget.songkick.com/3271811/widget.js" />
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
