import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logoPic from "../public/beatdrop-logo-white-text.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import Link from "next/link";
import BeatdropContext from "./BeatdropContext";

const Navigation = () => {
  const router = useRouter();
  const [loggedin, setLoggedin] = useState(false);
  const { user } = useContext(BeatdropContext);

  useEffect(() => {
    if (user) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
      if (router.asPath !== "/about") {
        router.push("/");
      }
    }
  }, [user]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setLoggedin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar className="py-0 px-3 !bg-beatdrop-pink z-10" fixed="top">
      <Navbar.Brand className="p-0">
        <Link eventKey="0" className="p-0" href="/">
          <Image src={logoPic} alt="beatdrop logo" width={100} height={24} />
        </Link>
      </Navbar.Brand>

      <Nav className="pb-2 pt-2 ml-auto text-lg">
        {loggedin && (
          <Link
            className="text-white mx-3 hover:!text-beatdrop-yellow"
            eventKey="2"
            href="/map"
          >
            map
          </Link>
        )}

        {loggedin && (
          <Link
            className="text-white mx-3 hover:!text-beatdrop-yellow"
            eventKey="1"
            href="/profile"
          >
            profile
          </Link>
        )}

        <Link
          className="text-white mx-3 hover:!text-beatdrop-yellow"
          eventKey="1"
          href="/about"
        >
          about
        </Link>

        {loggedin && (
          <button
            onClick={logout}
            className="bg-white ml-3 hover:!bg-beatdrop-yellow text-beatdrop-pink hover:!text-white py-0 px-4 rounded-full no-underline "
          >
            sign out
          </button>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
