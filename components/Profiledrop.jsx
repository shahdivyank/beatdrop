import React, { useState } from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Profiledrop = ({
  index,
  pic,
  song,
  hours,
  location,
  comments,
  likes,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`text-black flex items-center justify-center mx-6 py-4 rounded-xl ${
        index % 2 == 1 ? "bg-[#F0F0F0]" : "bg-transparent"
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
      <button className=" bg-beatdrop-pink rounded-full text-white px-4 py-2">
        {location}
      </button>
      <div className="ml-14 mr-7 flex justify-center items-center ">
        <FaRegComment />
        <div className="mx-2"> {comments} </div>
      </div>
      <div className="mx-2 flex justify-center items-center">
        <FaRegStar />
        <div className="mx-2"> {likes} </div>
      </div>
      <button onClick={() => setToggle(!toggle)} className="mx-6">
        {toggle ? <FaChevronDown /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export default Profiledrop;
