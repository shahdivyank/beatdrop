import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import logoPic from "../public/beatdrop-logo-white-text.png";
import headphonePic from "../public/beatdrop-logo-white-headphones-welcome.png";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import BeatdropContext from "./BeatdropContext";

const Welcome = () => {
  const router = useRouter();
  const [loggedin, setLoggedin] = useState(false);
  const { setPublicDrops, setPrivateDrops, user, setUser, token } =
    useContext(BeatdropContext);

  useEffect(() => {
    if (user) {
      setLoggedin(true);
    }
  }, [user]);

  const login = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, new GoogleAuthProvider())
        .then(async (result) => {
          setUser({
            name: result.user.displayName,
            uid: result.user.uid,
            image: result.user.photoURL,
            bio: "Enter Bio...",
          });
          axios
            .post("/api/getPublicDrops", { token: token })
            .then((response) => setPublicDrops(response.data))
            .catch((error) => console.log(error));
          axios
            .post("/api/getPrivateDrops", {
              uid: result.user.uid,
              token: response.data,
            })
            .then((response) => setPrivateDrops(response.data))
            .catch((error) => console.log(error));
          setLoggedin(true);
          router.push("/map");
        })
        .catch((error) => {
          router.push("/");
        });
    });
  };

  return (
    <>
      <div className="flex justify-center items-center -mt-36">
        <Image src={headphonePic} alt="headphone logo" width={56} height={56} />
      </div>

      <div className="flex justify-center items-center pt-4">
        <Image src={logoPic} alt="logo pic" className="w-11/12" />
      </div>

      <div className="flex justify-center items-center">
        <h3 className="text-2xl -mt-6 mb-8 mr-2 font-normal text-white">
          hear the world from another’s perspective
        </h3>
      </div>

      <div className="flex justify-center items-center">
        {loggedin && (
          <Link
            href="/map"
            className="bg-white hover:!bg-beatdrop-purple text-beatdrop-black hover:!text-white py-2 px-20 rounded-full no-underline "
          >
            dashboard
          </Link>
        )}

        {!loggedin && (
          <button
            onClick={login}
            className="bg-white hover:!bg-beatdrop-purple text-beatdrop-black hover:!text-white py-2 px-20 rounded-full no-underline "
          >
            sign in
          </button>
        )}
      </div>
    </>
  );
};

export default Welcome;
