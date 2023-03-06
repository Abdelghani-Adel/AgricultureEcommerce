import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>AgriOnClick</title> */}
        {/* <meta name="description" content="Created by RTS Solutions" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
        {/* <link rel="stylesheet" href="/static/bootstrap.min.css.map" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <script defer src="/static/jquery-3.5.1.min.js"></script>
        <script defer src="/static/popper.min.js"></script>
        <script defer src="/static/bootstrap.min.js"></script> */}
        {/* <script defer src="/static/bootstrap.min.js.map"></script> */}
      </body>
    </Html>
  );
}
