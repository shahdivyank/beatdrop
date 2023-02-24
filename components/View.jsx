import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegStar, FaTimes } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const View = ({ song, description, posted, album, setToggleView }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setName(currentState.displayName);
      }
    });
  }, []);

  return (
    <div className="rounded-3xl bg-gray-200">
      <Row className="w-full m-0 p-0 ">
        <Col
          lg={5}
          className="border-r-4 border-black flex justify-center items-center flex-col"
        >
          <img src={album} alt="Album" className="rounded-3xl w-9/12" />
          <div className="w-10/12 mt-2">
            <div className="h-2 bg-black w-full" />
            <div className="flex justify-between items-center w-full">
              <p className="m-0">PULL FROM SPOTIFY</p>
              <p className="m-0">PULL FROM SPOTIFY</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-start flex-col w-full">
                <p className="m-0">{song}</p>
                <p className="m-0">PULL FROM SPOTIFY</p>
              </div>
              <FaRegStar />
            </div>
          </div>
        </Col>
        <Col lg={7} className=" p-4">
          <div className="flex justify-between items-center">
            <p className="m-2 font-bold text-3xl">{name}</p>
            <FaTimes
              className="hover:text-red-500 hover:cursor-pointer"
              onClick={() => setToggleView(false)}
            />
          </div>
          <p className="m-2">{description}</p>
          <p className="m-2 font-light text-gray-500">{posted}</p>
        </Col>
      </Row>
    </div>
  );
};

export default View;
