import {Main, NextScript , Html, Head} from 'next/document'
import Script from 'next/script'

export default function Document() {
    console.log(process.env.NODE_ENV === 'production');
    return (
      <Html>
        <Head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XWFCGB25NN" strategy="afterInteractive"></Script>
          <Script id="gtag">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XWFCGB25NN');
            `}
          </Script>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }