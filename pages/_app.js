import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import BeatdropContext from "@/components/BeatdropContext";
import axios from "axios";

/* eslint-disable new-cap */
import { Outfit } from "@next/font/google";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/router";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
  const [publicDrops, setPublicDrops] = useState([]);
  const [privateDrops, setPrivateDrops] = useState([]);
  const [user, setUser] = useState();
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        const response = await axios.post("/api/getToken");
        setToken(response.data);
        axios
          .post("/api/getPublicDrops", { token: response.data })
          .then((response) => setPublicDrops(response.data))
          .catch((error) => console.log(error));
        axios
          .post("/api/getPrivateDrops", {
            uid: currentState.uid,
            token: response.data,
          })
          .then((response) => setPrivateDrops(response.data))
          .catch((error) => console.log(error));

        axios
          .post("/api/getUserInfo", { uid: currentState.uid })
          .then((response) =>
            setUser({
              name: currentState.displayName,
              image: currentState.photoURL,
              uid: currentState.uid,
              bio: response.data,
            })
          )
          .catch((error) => console.log(error));
      } else {
        console.log("rodrigo was here:D");
        router.push("/");
      }
    });
  }, []);

  return (
    <BeatdropContext.Provider
      value={{
        publicDrops,
        setPublicDrops,
        privateDrops,
        setPrivateDrops,
        user,
        setUser,
        token,
        setToken,
      }}
    >
      <main className={`${outfit.className}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </BeatdropContext.Provider>
  );
}
