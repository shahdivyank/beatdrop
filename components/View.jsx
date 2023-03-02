import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegStar, FaTimes } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const colors = [
  "bg-beatdrop-orange",
  "bg-beatdrop-pink",
  "bg-beatdrop-teal",
  "bg-beatdrop-purple",
  "bg-beatdrop-yellow",
];

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
      <Row className="w-full m-0 p-0">
        <Col
          lg={5}
          className="border-r-4 border-gray-300 flex justify-center items-center flex-col"
        >
          <img src={album} alt="Album" className="rounded-3xl w-9/12 " />
          <div className="w-10/12 mt-2">
            <div className="h-2 bg-gray-300 w-full" />
            <div className="flex justify-between items-center- w-full">
              <p className="m-0 text-xs text-gray-400 ">1:47</p>
              <p className="m-0 text-xs text-gray-400 ">3:50</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center flex-col w-full">
                <div className="m-0 p-0 text-black text-3xl font-bold">
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
        <Col lg={7} className="flex justify-start items-center flex-col">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center">
              <p className="font-bold text-3xl m-0 ">{name}</p>
              <button className="bg-beatdrop-pink text-white text-xl px-4 py-2 rounded-full font-light mx-2">
                {location}
              </button>
            </div>

            <div className="flex justify-end mr-1">
              <FaTimes
                className="text-gray-400 hover:text-red-500 hover:cursor-pointer text-2xl"
                onClick={() => setToggleView(false)}
              />
            </div>
          </div>
          <p className="font-light text-gray-500 w-full m-0">{posted} AGO</p>
          <div className="my-2 mr-2 text-2xl">{description}</div>
          <div className="flex justify-center items-center m-0 p-0">
            <Row className="flex justify-start items-center w-fit m-0 p-0">
              {hashtags.map((hastag, index) => (
                <Col key={index} className="!max-w-fit m-2 p-0">
                  <button
                    className={`${
                      colors[index % colors.length]
                    } text-white px-4 py-2 rounded-full`}
                  >
                    {hastag}
                  </button>
                </Col>
              ))}
            </Row>
            {/* <div className="text-gray-400 text-3xl flex">
              <FaRegStar />
              <p className="text-black ml-2">871</p>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default View;
