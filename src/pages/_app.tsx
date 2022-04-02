import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Layout } from "../components/Lauout";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>tsux.dev</title>
        <meta
          name="description"
          content="Author: tomoya tsukamura. portfolio, about me, works, blog."
        ></meta>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦔</text></svg>"
        ></link>
        <script
          async
          defer
          data-website-id="f7d63978-2740-4b75-951b-e3068885f9ac"
          src="https://my-umami-swart.vercel.app/umami.js"
        ></script>
      </Head>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
