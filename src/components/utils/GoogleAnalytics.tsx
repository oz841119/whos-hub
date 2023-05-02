import Script from 'next/script'
export default function GoogleAnalytics() {
    return (
        <div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XWFCGB25NN" strategy="afterInteractive"></Script>
          <Script id="gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XWFCGB25NN');
              console.log('GA')
            `}
          </Script>
        </div>
    )
}