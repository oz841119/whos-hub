import {Main, NextScript , Html, Head} from 'next/document'
export default function Document() {
    console.log(process.env.NODE_ENV === 'production');
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }