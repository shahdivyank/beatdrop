import React from "react";
//import { CgProfile } from "react-icons/cg";
import Favicon from "../public/favicon.ico";
import Image from "next/image";

const ProfileInformation = ({ name, drops /*, friends*/ }) => {
  return (
    <div className="w-full flex justify-start items-center mb-10">
      <div className="flex flex-col font-outfit w-1/2">
        <span className="font-semibold text-6xl mb-3">{name}</span>
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
          {/*
          <div className="mx-2 flex justify-center items-center">
            <CgProfile className="mx-2 text-2xl" />
            <span>{friends} friends</span>
          </div>
          <div className="ml-2">
            <button className=" border-2 py-1 px-3 border-black rounded-2xl">
              ADD FRIEND
            </button>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
