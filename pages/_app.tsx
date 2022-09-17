import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
