import React from "react";
import Image from "next/image";
import logoPic from "../public/beatdrop-logo-white-text.png";
import headphonePic from "../public/beatdrop-logo-white-headphones.png";
const Welcome = () => {
  return (
    <div className="h-screen bg-indigo-500">
      <div className="flex justify-center items-center pt-24">
        <Image src={headphonePic} alt="headphone logo" width={56} height={56} />
      </div>

      <div className="flex justify-center items-center pt-4">
        <Image src={logoPic} alt="logo pic" width={512} height={512} />
      </div>

      <div className="flex justify-center items-center">
        <h3 className="text-2xl mb-8 text-gray-200">
          hear the world from another perspective
        </h3>
      </div>
    </div>
  );
};

export default Welcome;
