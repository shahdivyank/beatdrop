import React from "react";
import img from "../public/Ditto.jpg";
import Image from "next/image";

function SongImage() {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        blurd
        alt="album cover"
        width="280"
        height="420"
      />
    </div>
  );
}

export default SongImage;
