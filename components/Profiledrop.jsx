import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Accordion, Col, Row } from "react-bootstrap";
import axios from "axios";

const Profiledrop = ({
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
        <img
          className="rounded-full mx-3"
          alt="album cover"
          src={
            "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_800_800/0/1643607679196?e=2147483647&v=beta&t=UVnFbHbdGuLYu_LOTnOlDWwSXuDPgyasWxCQ1CI12jA"
          }
          width={80}
          height={80}
        />
        <div className="flex flex-col mx-4">
          <p className="font-bold mx-3 my-0"> {song} </p>
          <p className="text-timePosted mx-3 my-0">
            {" "}
            {Math.ceil(
              (new Date().getTime() - new Date(time.seconds * 1000).getTime()) /
                (1000 * 60 * 60 * 24)
            )}{" "}
            DAYS AGO
          </p>
        </div>
        <div className=" bg-beatdrop-pink rounded-full text-white px-4 py-2">
          {city}
        </div>
        <div className="mx-4 flex justify-center items-center">
          <FaRegStar />
          <div className="mx-2"> {likes} </div>
        </div>
        {toggle ? <FaChevronDown /> : <FaChevronRight />}
      </Accordion.Button>
      <Accordion.Body className="m-0 p-0 w-full">
        <Row className="w-full m-0 p-0">
          <Col xl={6} className="flex justify-center items-center m-0 p-0">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.long}&zoom=15&size=300x300&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            />
          </Col>
          <Col xl={6} className="flex justify-center items-center m-0 p-0">
            <p className="text-center m-0 font-outfit">{description}</p>
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Profiledrop;
