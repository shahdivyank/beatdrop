import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logoPic from "../public/beatdrop-logo-white-text.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState === null) {
        setLoggedin(false);
        router.push("/");
      } else {
        setLoggedin(true);
      }
    });
  }, []);

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
    <Navbar className=" py-0 px-3 !bg-beatdrop-pink z-10" fixed="top">
      <Navbar.Brand className="p-0">
        <Nav.Link eventKey="0" className="p-0" href="/">
          <Image src={logoPic} alt="beatdrop logo" width={128} height={128} />
        </Nav.Link>
      </Navbar.Brand>

      <Nav className=" pb-2 pt-2 ml-auto text-lg">
        {loggedin && (
          <Nav.Link
            className=" text-white hover:!text-beatdrop-yellow"
            eventKey="2"
            href="/map"
          >
            map
          </Nav.Link>
        )}

        {loggedin && (
          <Nav.Link
            className=" text-white  hover:!text-beatdrop-yellow"
            eventKey="1"
            href="/profile"
          >
            profile
          </Nav.Link>
        )}

        <Nav.Link
          className=" text-white  hover:!text-beatdrop-yellow"
          eventKey="1"
          href="/about"
        >
          about
        </Nav.Link>

        {loggedin && (
          <button
            onClick={logout}
            className="bg-white hover:!bg-beatdrop-yellow text-beatdrop-pink hover:!text-white py-2 px-4 rounded-full no-underline "
          >
            signout
          </button>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
