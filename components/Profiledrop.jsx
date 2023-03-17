import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown, FaTrash, FaPencilAlt, FaCheck } from "react-icons/fa";
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
  image,
  artist,
  time,
  location,
  likes,
  description,
  hashtags,
  token,
}) => {
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState("");
  const [view, setView] = useState(true);
  const [edit, setEdit] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState(description);

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

  const handleDeleteDrop = () => {
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

  const handleEditDrop = () => {
    axios
      .post("/api/updateDropDescription", {
        id: id,
        description: descriptionInput,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setEdit(false);
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
          className={`after:!bg-none focus:!shadow-none !text-black !rounded-xl !w-full  ${
            index % 2 == 1 ? "!bg-[#F0F0F0]" : "bg-transparent"
          }`}
        >
          <div className="grid grid-cols-10 items-center w-full ">
            <div className=" px-3 ">{index + 1}</div>
            <div className="flex  col-span-5">
              {image && (
                <img
                  className=" rounded-full mx-3 "
                  alt="album cover"
                  src={image}
                  width={80}
                  height={80}
                />
              )}
              <div className="flex flex-col mx-4  items-start justify-center">
                <p className="font-bold mx-3 my-0 ">
                  {" "}
                  {song} - {artist}{" "}
                </p>
                <div className="text-timePosted mx-3 my-0 ">
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
              </div>
            </div>
            <div className=" bg-beatdrop-pink rounded-full text-white px-4 py-2 flex justify-center text-lg col-span-2">
              {city}
            </div>
            <div className=" ml-8 flex justify-center items-center text-yellow-400">
              <FaStar />
              <div className="ml-2 text-black"> {likes} </div>
            </div>
            <div className=" flex justify-center ">
              {toggle ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </div>
        </Accordion.Button>
        <Accordion.Body className="m-0 p-0 w-full mb-4 bg-white">
          <Row className="w-full m-0 p-0">
            <Col xl={6} className="flex justify-center items-center mr-0 p-0">
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.long}&markers=color:0xE12A62%7Clabel:B%7C${location.lat},${location.long}&zoom=15&size=500x300&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                className="rounded-bl-4xl border-r-4 border-white"
              />
            </Col>
            <Col
              xl={6}
              className="m-0 p-4 bg-[#F0F0F0] rounded-br-4xl flex flex-col justify-between border-l-4 border-white "
            >
              <div className="flex w-full justify-end">
                <div className="flex justify-end">
                  {!edit && (
                    <FaPencilAlt
                      onClick={() => setEdit(true)}
                      className="mx-2 hover:text-yellow-400 hover:cursor-pointer"
                    />
                  )}
                  {edit && (
                    <FaCheck
                      onClick={handleEditDrop}
                      className="mx-2 hover:text-green-500 hover:cursor-pointer"
                    />
                  )}
                </div>
                <div className="flex justify-end">
                  <FaTrash
                    onClick={handleDeleteDrop}
                    className="mx-2 hover:text-red-500 "
                  />
                </div>
              </div>

              <textarea
                className="m-0 p-0 font-outfit flex justify-start break-words rounded-lg p-2"
                disabled={!edit}
                value={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
              />

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
