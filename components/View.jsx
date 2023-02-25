import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
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
    <div className="rounded-3xl bg-beatdrop-lightgrey h-fit w-[25vw] mr-6 py-4 drop-shadow-xl ">
      <Row className="w-full m-0 p-0 ">
        <Col
          lg={5}
          className="border-r-4 border-black flex justify-center items-center flex-col"
        >
          <img src={album} alt="Album" className="rounded-3xl w-9/12 " />
          <div className="w-10/12 mt-2">
            <div className="h-2 bg-black w-full" />
            <div className="flex justify-between items-center- w-full">
              <p className="m-0 text-xs text-gray-400 "> 1:47</p>
              <p className="m-0 text-xs text-gray-400 ">3:50</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center  flex-col w-full">
                <div className="m-0 p-0 text-black text-3xl font-bold pt-2 ">
                  {song}
                </div>
                <div className="m-0 p-0 font-semibold text-gray-700 text-xl">
                  Chung Ha
                </div>
              </div>
              <div className="text-gray-400 text-3xl">
                <FaRegStar />
              </div>
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
          <div className="m-2 ">{description}</div>
          <p className="m-2 font-light text-gray-500">{posted}</p>
        </Col>
      </Row>
    </div>
  );
};

export default View;
