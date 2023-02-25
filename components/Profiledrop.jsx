import React, { useState } from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Accordion, Col, Row } from "react-bootstrap";

const Profiledrop = ({
  index,
  pic,
  song,
  hours,
  location,
  likes,
  description,
}) => {
  const [toggle, setToggle] = useState(false);
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
        <Image
          className="rounded-full mx-3"
          alt="album cover"
          src={pic}
          width={80}
          height={80}
        />
        <div className="flex flex-col mx-4">
          <p className="font-bold mx-3 my-0"> {song} </p>
          <p className="text-timePosted mx-3 my-0"> {hours} HOURS AGO</p>
        </div>
        <div className=" bg-beatdrop-pink rounded-full text-white px-4 py-2">
          {location}
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
            <img src="https://www.gm-maps.com/osm_tiles/14/2807/6545.png" />
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
