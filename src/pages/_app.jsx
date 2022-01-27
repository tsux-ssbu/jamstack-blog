import "../styles/globals.css";
import { Layout } from "../components/Lauout";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
