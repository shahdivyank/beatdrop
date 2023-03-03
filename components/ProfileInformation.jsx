import React, { useState } from "react";
import Favicon from "../public/favicon.ico";
import Image from "next/image";
import { BiPencil, BiCheck } from "react-icons/bi";
import axios from "axios";
import { useRef } from "react";

const ProfileInformation = ({ name, drops, description, uid }) => {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState(description);
  const inputRef = useRef(null);

  const handleUpdate = () => {
    if (!toggle === false) {
      axios
        .post("/api/updateBio", {
          uid: uid,
          message: message,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      console.log("AXIOS CALL MADE");
    }

    setToggle(!toggle);
    inputRef.current.focus();
  };

  return (
    <div className="w-full flex justify-start items-center mb-10">
      <div className="flex flex-col font-outfit w-1/2">
        <div className="flex justify-between mt-10">
          <span className="font-semibold text-6xl mb-3">{name}</span>

          <div className="text-3xl hover:text-beatdrop-pink hover:cursor-pointer">
            <button onClick={handleUpdate}>
              {toggle ? <BiCheck /> : <BiPencil />}
            </button>
          </div>
        </div>

        <div className="mb-2 text-xl">
          <input
            ref={inputRef}
            name="message"
            value={message}
            disabled={!toggle}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

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
