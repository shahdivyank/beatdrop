import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown, FaTrash } from "react-icons/fa";
import { Accordion, Col, Row } from "react-bootstrap";
import axios from "axios";

const colors = [
  "bg-beatdrop-orange",
  "bg-beatdrop-pink",
  "bg-beatdrop-teal",
  "bg-beatdrop-purple",
  "bg-beatdrop-yellow",
];

const Profiledrop = ({
  id,
  index,
  song,
  time,
  location,
  likes,
  description,
  hashtags,
}) => {
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState("");
  const [songName, setSong] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState("");
  const [artist, setArtist] = useState("");
  const [view, setView] = useState(true);

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
    axios.post("/api/getToken").then((response) => {
      setToken(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .post("/api/getSong", { songID: song, token: token })
      .then((response) => {
        setSong(response.data.song);
        setImage(response.data.url);
        setArtist(response.data.artist);
      });
  }, [token]);

  const handleDeleteDrop = () => {
    console.log(id);
    axios
      .post("/api/deleteDrop", { id: id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setView(false);
  };

  return (
    view && (
      <Accordion.Item
        eventKey={index}
        className={`text-black m-0 p-0 !rounded-xl !border-none !w-full ${
          index % 2 == 1 ? "!bg-[#F0F0F0]" : "bg-transparent"
        }`}
      >
        <Accordion.Button
          onClick={() => setToggle(!toggle)}
          className={`after:!bg-none focus:!shadow-none !text-black !rounded-xl ${
            index % 2 == 1 ? "!bg-[#F0F0F0]" : "bg-transparent"
          }`}
        >
          <div className=" px-3">{index + 1}</div>
          {image && (
            <img
              className="rounded-full mx-3"
              alt="album cover"
              src={image}
              width={80}
              height={80}
            />
          )}
          <div className="flex flex-col mx-4">
            <p className="font-bold mx-3 my-0">
              {" "}
              {songName} - {artist}{" "}
            </p>
            <p className="text-timePosted mx-3 my-0">
              {" "}
              {Math.ceil(
                (new Date().getTime() -
                  new Date(time.seconds * 1000).getTime()) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              DAYS AGO
            </p>
          </div>
          <div className=" bg-beatdrop-pink rounded-full text-white px-4 py-2">
            {city}
          </div>
          <div className="mx-4 flex justify-center items-center ">
            <FaRegStar />
            <div className="mx-2"> {likes} </div>
          </div>
          <FaTrash
            onClick={handleDeleteDrop}
            className="mx-2 hover:text-red-500"
          />
          {toggle ? <FaChevronDown /> : <FaChevronRight />}
        </Accordion.Button>
        <Accordion.Body className="m-0 p-0 w-full mb-4">
          <Row className="w-full m-0 p-0">
            <Col xl={6} className="flex justify-center items-center mr-0 p-0">
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.long}&markers=color:0xE12A62%7Clabel:B%7C${location.lat},${location.long}&zoom=15&size=500x300&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                className="rounded-bl-4xl border-r-4 border-white"
              />
            </Col>
            <Col
              xl={6}
              className="m-0 p-4 bg-[#F0F0F0] rounded-br-4xl flex flex-col justify-between border-l-4 border-white"
            >
              <p className="mb-4 mx-7 font-outfit break-words">{description}</p>

              <div className="flex justify-center items-center mb-2">
                <Row className="border-t border-[#AAAAAA] ">
                  {hashtags.map((hashtag, index) => (
                    <Col
                      key={index}
                      className={`${
                        colors[index % colors.length]
                      } rounded-full text-white px-3 py-1 m-1 mt-4`}
                    >
                      #{hashtag}
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    )
  );
};

export default Profiledrop;
