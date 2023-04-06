import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import BeatdropContext from "@/components/BeatdropContext";

/* eslint-disable new-cap */
import { Outfit } from "@next/font/google";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
  const [publicDrops, setPublicDrops] = useState();
  const [privateDrops, setPrivateDrops] = useState();

  return (
    <BeatdropContext.Provider
      value={{ publicDrops, setPublicDrops, privateDrops, setPrivateDrops }}
    >
      <main className={`${outfit.className}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </BeatdropContext.Provider>
  );
}
