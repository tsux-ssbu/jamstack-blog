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
      <div className="mx-auto w-11/12 md:w-10/12">
        <About />
        <Works />
      </div>
      <Footer />
    </>
  );
}
