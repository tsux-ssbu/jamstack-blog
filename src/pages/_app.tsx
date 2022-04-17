import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'
import { Layout } from '@/components/common/Lauout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>tsux.dev</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
