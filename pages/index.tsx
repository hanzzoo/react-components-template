import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sample from "./components";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Sample />
      </main>
    </div>
  );
};

export default Home;
