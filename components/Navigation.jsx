import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar className=" py-0  px-3 !bg-beatdrop-pink" fixed="top">
      <Navbar.Brand className="p-0">
        <Nav.Link eventKey="0" className="p-0" href="/">
          <img src="beatdrop-white.png" className="h-[11vh]" alt="beatdrop" />
        </Nav.Link>
      </Navbar.Brand>

      <Nav className=" pb-2 pt-2 ml-auto text-lg ">
        <Nav.Link
          className=" text-white  hover:!text-beatdrop-yellow"
          eventKey="1"
          href="/profile"
        >
          profile
        </Nav.Link>
        <Nav.Link
          className=" text-white hover:!text-beatdrop-yellow"
          eventKey="2"
          href="/map"
        >
          map
        </Nav.Link>

        <Link
          href="/signout"
          class="bg-white hover:!bg-beatdrop-yellow text-beatdrop-pink hover:!text-white py-2 px-4 rounded-full no-underline "
        >
          signout
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;