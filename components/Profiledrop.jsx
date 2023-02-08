import React from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Profiledrop = ({ pic, song, hours, location, comments, likes }) => {
  console.log(pic, song, hours, location, comments, likes);
  return (
    <div
      className="text-black  h-screen flex items-center justify-center mx-6
    "
    >
      1
      <Image
        className="rounded-full mx-3"
        alt="album cover"
        src={pic}
        width={56}
        height={56}
      />
      <div flex flex-col mx-4>
        <p className="font-bold mx-3 my-0"> {song} </p>
        <p className="mx-3 my-0"> {hours} hours ago</p>
      </div>
      <button className=" bg-beatdrop-pink rounded-full text-white px-4 py-2">
        {location}
      </button>
      <div className="mx-3 flex justify-center items-center ">
        <FaRegComment />
        <div className="mx-2"> {comments} </div>
      </div>
      <div className="mx-3 flex justify-center items-center">
        <FaRegStar />
        <div className="mx-2"> {likes} </div>
      </div>
    </div>
  );
};

export default Profiledrop;
