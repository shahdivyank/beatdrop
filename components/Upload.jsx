import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

const Upload = ({ setToggleUpload }) => {
  const [name, setName] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setName(currentState.displayName);
      }
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  }, []);

  return (
    <>
      <div className="h-fit grid grid-cols-9 shadow-sm rounded-4xl bg-[#F5F5F5]">
        <div className="col-span-4 m-5 flex justify-center items-center flex-col">
          <div className="bg-[#EBEBEB] rounded-xl w-full h-full flex justify-center items-center">
            <BsMusicNoteBeamed className="text-9xl text-[#F5F5F5]" />
          </div>

          <div className="w-full mt-3 p-0 text-sm rounded-full border-solid border-2 border-beatdrop-grey bg-[#F5F5F5] flex justify-center items-center">
            <FiSearch className="text-xl ml-2 text-[#D9D9D9]" />
            <input
              className="w-full p-1 px-3 text-sm rounded-tr-full rounded-br-full border-beatdrop-grey bg-[#F5F5F5] "
              type="text"
              id="first"
              placeholder="search"
              name="first"
            />
          </div>
        </div>

        <div className="col-span-5 border-l-2 border-[#EBEBEB] px-10 my-4 flex justify-center items-start flex-col">
          <div className="flex justify-between">
            <div className="text-2xl mr-10 font-semibold">{name}</div>
            <div className="text-xs  bg-beatdrop-pink rounded-full w-fit h-fit p-1 px-3 text-white">
              {lat}
              {lng}
            </div>
            <FaTimes
              className="hover:text-red-500 hover:cursor-pointer flex justify-items-end -mr-4"
              onClick={() => setToggleUpload(false)}
            />
          </div>

          <textarea
            className="w-full text-black h-[20vh] p-3 text-sm mt-2 rounded-2xl border-solid border-2 border-beatdrop-grey bg-beatdrop-lightgrey"
            type="text"
            id="first"
            placeholder="write message here"
            name="first"
          />

          <div className="my-3">
            <div className="text-xs text-[#BABABA] mb-2">TAGS</div>
            <input
              className="text-black pl-3 py-1 text-sm rounded-full border-solid border-2 border-beatdrop-grey bg-beatdrop-lightgrey w-fit"
              type="text"
              // id="first"
              placeholder="add tag"
              name="first"
            />
          </div>

          <button className="bg-beatdrop-pink rounded-full text-white w-full text-xs py-1.5">
            UPLOAD BEATDROP{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
