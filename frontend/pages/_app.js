import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  
    <>
        <Head>
      <meta name="author" content="Daniel Mbazu"/>
      <link rel="wealthmate icon" href="/bank.png" />
      <title>WealthMate</title>

    </Head>
    <Component {...pageProps} />
  </>
    
  )
}
