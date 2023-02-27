import React from "react";
import Favicon from "../public/favicon.ico";
import Image from "next/image";
import { BiPencil } from "react-icons/bi";

const ProfileInformation = ({ name, drops, description }) => {
  return (
    <div className="w-full flex justify-start items-center mb-10">
      <div className="flex flex-col font-outfit w-1/2">
        <div className="flex justify-end">
          <BiPencil className="text-2xl" />
        </div>
        <span className="font-semibold text-6xl mb-3">{name}</span>
        <span className="font-outfit my-2">{description}</span>
        <div className="flex flex-row items-center">
          <div className="mr-2 flex justify-center items-center">
            <Image
              src={Favicon}
              height={24}
              width={24}
              alt="logo"
              className="mx-2"
            />
            <span>{drops} drops</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
