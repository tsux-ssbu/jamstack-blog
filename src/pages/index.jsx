import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Works } from "../components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Works />
      <Footer />
    </>
  );
}
