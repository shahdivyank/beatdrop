import Image from "next/image";
import React from "react";

const Developer = ({ name, image }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={image}
        alt=""
        width={100}
        height={100}
        className="bg-gradient-to-t from-red-500 via-white to-transparent"
      />
      {name}
    </div>
  );
};

export default Developer;
