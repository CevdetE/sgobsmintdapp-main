import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Walletbutton, Mintbutton } from "../components/";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>Stonedgoblins</title>
        <meta name="description" content="We are stoned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-row justify-between p-4">
        <Link href="/about">
          <a className="text-lg font-light">About</a>
        </Link>
        <Walletbutton />
      </nav>

      <main>
        <div className="justify-center flex">
          <Mintbutton />
        </div>
      </main>

      <footer className="justify-end p-4">
        <p className="text-lg font-light">Footer</p>
      </footer>
    </div>
  );
};

export default Home;
