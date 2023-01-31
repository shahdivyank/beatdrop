import "@/styles/globals.css";

/* eslint-disable new-cap */
import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
