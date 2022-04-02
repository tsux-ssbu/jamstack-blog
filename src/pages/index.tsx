import { NextPage } from "next";

import { About } from "../components/About";
import { Profile } from "../components/Profile";
import { Works } from "../components/Works";

const Home: NextPage = () => {
  return (
    <>
      <Profile />
      <div className="mx-auto w-11/12 md:w-10/12">
        <About />
        <Works />
      </div>
    </>
  );
};

export default Home;
