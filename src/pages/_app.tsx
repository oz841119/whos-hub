import '../styles/init.css'
import '../styles/global.css'
import '../styles/var.css'
import Layout from '../components/Layout/Layout'

type PassTS = {
  Component: any
  pageProps: any
}

export default function App({ Component, pageProps }: PassTS) {
    return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    )
  }
  