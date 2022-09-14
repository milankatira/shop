import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10 w-full flex justify-center items-center">
        <TextField
          className="mx-40 w-1/2"
          id="outlined-basic"
          label="Product"
          variant="outlined"
        />
      </main>
    </div>
  );
};

export default Home;
