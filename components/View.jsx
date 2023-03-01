import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegStar, FaTimes } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const View = ({
  song,
  description,
  album,
  location,
  posted,
  hashtags,
  setToggleView,
}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setName(currentState.displayName);
      }
    });
  }, []);

  return (
    <div className="rounded-3xl bg-beatdrop-lightgrey h-fit w-2/3 mr-6 py-4 drop-shadow-xl ">
      <Row className="w-full m-0 p-0 ">
        <Col
          lg={5}
          className="border-r-4 border-gray-300 flex justify-center items-center flex-col"
        >
          <img src={album} alt="Album" className="rounded-3xl w-9/12 " />
          <div className="w-10/12 mt-2">
            <div className="h-2 bg-gray-300 w-full" />
            <div className="flex justify-between items-center- w-full">
              <p className="m-0 text-xs text-gray-400 "> 1:47</p>
              <p className="m-0 text-xs text-gray-400 ">3:50</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center  flex-col w-full">
                <div className="m-0 p-0 text-black text-3xl font-bold pt-2 ">
                  {song}
                </div>
                <div className="my-1 p-0 font-semibold text-gray-700 text-xl">
                  One Direction
                </div>
              </div>
              <div className="text-gray-400 text-3xl">
                <FaRegStar />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={7} className="">
          <div className="flex justify-end mb-4 mt-0 mr-1">
            <FaTimes
              className="text-gray-400 hover:text-red-500 hover:cursor-pointer"
              onClick={() => setToggleView(false)}
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="m-2 font-bold text-5xl">{name}</p>
            <button className="bg-beatdrop-pink text-white text-xl px-4 py-2 rounded-full font-light mr-8">
              {location}
            </button>
          </div>

          <div className="m-2 text-2xl h-1/2 ">{description}</div>
          <p className="m-2 font-light text-gray-500">{posted} AGO</p>

          <Row className="border-b-4 border-gray-300 flex justify-center items-center m-2"></Row>
          <Row>
            <Col lg={6} className="border-r-4 border-gray-300">
              <Col>
                <button className=" bg-beatdrop-orange text-white px-4 py-2 rounded-full mr-2 my-2">
                  {hashtags[0]}
                </button>
                <button className=" bg-beatdrop-pink text-white px-4 py-2 rounded-full mr-2 ">
                  {hashtags[1]}
                </button>
                <button className=" bg-beatdrop-teal text-white px-4 py-2 rounded-full  ">
                  {hashtags[2]}
                </button>
              </Col>

              <Col>
                <button className=" bg-beatdrop-purple text-white px-4 py-2 rounded-full mr-2">
                  {hashtags[3]}
                </button>
                <button className=" bg-beatdrop-yellow text-white px-4 py-2 rounded-full ">
                  {hashtags[4]}
                </button>
              </Col>
            </Col>
            <Col className="flex justify-center items-center mt-3">
              <div className="text-gray-400 text-5xl flex">
                <FaRegStar />
                <p className="text-black ml-2"> 871 </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default View;
