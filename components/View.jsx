import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";

const View = ({
  name,
  location,
  description,
  posted,
  primary,
  secondary,
  album,
  start,
  end,
  song,
  artist,
}) => {
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
              <p className="m-0">{start}</p>
              <p className="m-0">{end}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-start flex-col w-full">
                <p className="m-0">{song}</p>
                <p className="m-0">{artist}</p>
              </div>
              <FaRegStar />
            </div>
          </div>
        </Col>
        <Col lg={7} className=" p-4">
          <div className="flex justify-between items-center">
            <p className="m-2 font-bold text-3xl">{name}</p>
            <p className="m-0 rounded-full bg-pink-700 px-2 py-1 text-white">
              {location}
            </p>
          </div>
          <p className="m-2">{description}</p>
          <p className="m-2 font-light text-gray-500">{posted}</p>
          <div className="flex justify-evenly items-center w-full">
            <img
              className="rounded-3xl w-1/3"
              src={primary}
              alt="Laguna Beach"
            />
            <img
              className="rounded-3xl w-1/3"
              src={secondary}
              alt="Laguna Beach"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default View;
