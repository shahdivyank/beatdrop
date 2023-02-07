import React from "react";
import img from "../public/Ditto.jpg";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const Song = ({ band, song, username, time }) => {
  return (
    <div className="flex items-center mx-4">
      <div className="flex items-center gap-3">
        <Image
          src={img}
          placeholder="blur"
          blurd
          alt="album cover"
          className="rounded-full w-1/5"
        />
        <div>
          <p className="text-sm font-bold  m-0">
            {" "}
            {song} - {band}{" "}
          </p>
          <p className="text-xxs text-bold m-0 "> Posted by {username}</p>
          <p className="text-xxxs text-bold m-0">{time} AGO</p>
        </div>
      </div>

      <div className="text-4xl text-beatdrop-darkergrey ">
        <HiArrowNarrowRight />
      </div>
    </div>
  );
};

export default Song;
