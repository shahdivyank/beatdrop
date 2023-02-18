import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoPic from "../public/beatdrop-logo-white-text.png";
import headphonePic from "../public/beatdrop-logo-white-headphones.png";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import Link from "next/link";

const Welcome = () => {
  const router = useRouter();
  const [loggedin, setLoggedin] = useState(false);

  const login = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, new GoogleAuthProvider())
        .then(() => {
          router.push("/map");
        })
        .catch((error) => {
          router.push("/");
        });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setLoggedin(true);
      }
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center pt-24">
        <Image src={headphonePic} alt="headphone logo" width={56} height={56} />
      </div>

      <div className="flex justify-center items-center pt-4">
        <Image src={logoPic} alt="logo pic" width={512} height={512} />
      </div>

      <div className="flex justify-center items-center">
        <h3 className="text-2xl mb-8 text-gray-200">
          hear the world from another perspective
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
