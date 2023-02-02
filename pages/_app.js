import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

/* eslint-disable new-cap */
import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
  return (
    <Layout className={outfit.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
