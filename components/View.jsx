import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegStar, FaTimes, FaStar } from "react-icons/fa";
import axios from "axios";

const colors = [
  "bg-beatdrop-orange",
  "bg-beatdrop-pink",
  "bg-beatdrop-teal",
  "bg-beatdrop-purple",
  "bg-beatdrop-yellow",
];

const View = ({
  id,
  song,
  name,
  artist,
  externalurl,
  description,
  location,
  image,
  time,
  hashtags,
  setToggleView,
  dropLikes,
}) => {
  const [toggle, setToggle] = useState(false);
  const [likes, setLikes] = useState(dropLikes);
  const [city, setCity] = useState("");

  const handleStarLike = () => {
    axios
      .post("/api/likeDrop", { id: id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLikes(likes + 1);
    setToggle(true);
  };

  const handleStarDislike = () => {
    axios
      .post("/api/dislikeDrop", { id: id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLikes(likes - 1);
    setToggle(false);
  };

  useEffect(() => {
    axios
      .post(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      )
      .then((response) => {
        setCity(
          response.data.plus_code.compound_code.split(",")[0].split(" ")[1] +
            ", " +
            response.data.plus_code.compound_code.split(",")[1]
        );
      });
  }, []);

  return (
    <div className="rounded-3xl bg-beatdrop-lightgrey h-fit mr-6 py-4 shadow-sm">
      <Row className="w-max m-0 p-0">
        <Col
          lg={5}
          className="border-r-2 border-gray-300 flex justify-center items-center flex-col"
        >
          <div className="flex justify-center items-center flex-col">
            <a
              href={externalurl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex justify-center items-center"
            >
              <img src={image} alt="Album" className="rounded-3xl w-9/12" />
            </a>
            <div className="w-10/12 mt-2 ">
              <div className=" w-full">
                <div className="flex flex-col w-full">
                  <div className="m-0 p-0 text-black text-3xl font-bold">
                    {song}
                  </div>
                  <div className="my-1 p-0 font-semibold text-gray-700 text-xl">
                    {artist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={7} className="flex justify-between flex-col m-0 px-4">
          <div>
            <div className="flex justify-between  items-center w-full">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-2xl m-0 ">{name}</p>
                <button className="bg-beatdrop-pink text-white text-xl px-4 py-2 rounded-full font-light mx-2">
                  {city}
                </button>
              </div>
              <div className="flex justify-end mr-1">
                <FaTimes
                  className="text-gray-400 hover:text-red-500 hover:cursor-pointer text-2xl"
                  onClick={() => setToggleView(false)}
                />
              </div>
            </div>
            <div className="font-light text-gray-500 text-xs w-full">
              {Math.ceil(
                (new Date().getTime() -
                  new Date(time.seconds * 1000).getTime()) /
                  (1000 * 60 * 60 * 24)
              ) == 1
                ? "LESS THAN 24 HOURS AGO"
                : `${Math.ceil(
                    (new Date().getTime() -
                      new Date(time.seconds * 1000).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )} DAYS AGO`}
            </div>
            <div className="my-2 mr-2 text-sm break-words">{description}</div>
          </div>
          <div className=" border-t-2 border-gray-300 flex justify-start items-center m-0  p-0 w-11/12">
            <Row className=" border-r-2 border-gray-300 w-fit m-0 py-3 pr-6">
              {hashtags.map((hastag, index) => (
                <Col key={index} className="!max-w-fit p-1">
                  <button
                    className={`${
                      colors[index % colors.length]
                    } text-white px-3 py-1 rounded-full`}
                  >
                    #{hastag}
                  </button>
                </Col>
              ))}
            </Row>
            <div className=" text-gray-400 text-3xl flex justify-center items-center p-2">
              {!toggle && (
                <FaRegStar
                  className="hover:!text-yellow-400 hover:cursor-pointer ml-4"
                  onClick={handleStarLike}
                />
              )}
              {toggle && (
                <FaStar
                  className="text-yellow-400 hover:cursor-pointer ml-4"
                  onClick={handleStarDislike}
                />
              )}
              <p className="text-black ml-2 mb-0">{likes}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default View;
