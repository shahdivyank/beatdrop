import React from "react";
import img from "../public/Ditto.jpg";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";


const fontStyles = {color: '#cbd5e1', fontSize: '70px'};

const Song = ({ band, song, username, time }) => {
  return (
   
   <div className = "flex items-center gap-4">
      <Image
        src={img}
        placeholder="blur"
        blurd
        alt="album cover"
        width="150"
        height="280"
        className="rounded-full"
        
      />
      <div>

        <p className="text-2xl font-bold  m-0">{" "} {band} - {song}{" "} </p>
        <p className="text-lg text-bold m-0 "> Posted by {username}</p>
        <p className="text-sm text-bold m-0">{time} AGO</p>

      </div>
      
      <div >
      < HiArrowNarrowRight style={fontStyles}/>
      </div>

    </div>
  );
};

export default Song;
