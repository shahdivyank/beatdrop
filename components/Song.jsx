import React from "react";
import img from "../public/ditto.jpg";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const Song = ({ band, song, username, time }) => {
  return (
    <button className="flex items-center px-4 py-6 hover:bg-[#F0F0F0]">
      <div className="flex items-center gap-3">
        <Image
          src={img}
          placeholder="blur"
          blurd="true"
          alt="album cover"
          className="rounded-full w-1/5"
        />
        <div className="flex flex-col items-start !text-black">
          <p className="text-songName font-semibold m-0">
            {" "}
            {song} - {band}{" "}
          </p>
          <p className="text-postedBy m-0"> Posted by {username}</p>
          <p className="text-timePosted m-0">
            {Math.ceil(
              (new Date().getTime() - new Date(time.seconds * 1000).getTime()) /
                (1000 * 60 * 60 * 24)
            )}{" "}
            DAYS AGO
          </p>
        </div>
      </div>
      <div className="text-4xl text-beatdrop-darkergrey">
        <HiArrowNarrowRight />
      </div>
    </button>
  );
};

export default Song;
