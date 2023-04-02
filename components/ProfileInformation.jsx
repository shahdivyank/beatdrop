import React, { useState } from "react";
import Favicon from "../public/beatdrop-logo-black-headphones.png";
import Image from "next/image";
import { BiPencil, BiCheck } from "react-icons/bi";
import axios from "axios";

const ProfileInformation = ({ name, drops, description, uid }) => {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState(description);

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
    }

    setToggle(!toggle);
  };

  return (
    <div className="w-full flex justify-start items-center mb-10 font-outfit">
      <div className="flex flex-col w-full ">
        <div className="flex justify-between mt-10 ">
          <span className="font-semibold text-6xl mb-3">{name}</span>

          <div className="text-3xl hover:text-beatdrop-pink hover:cursor-pointer">
            <button onClick={handleUpdate}>
              {toggle ? <BiCheck /> : <BiPencil />}
            </button>
          </div>
        </div>

        <div className="mb-1 flex justify-start text-xl">
          <input
            className=" rounded-lg py-2 px-4"
            name="message"
            value={message}
            disabled={!toggle}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={29}
          />
        </div>

        <div className="flex flex-row items-center">
          <div className="px-3 flex justify-center items-center text-black">
            <Image
              src={Favicon}
              height={24}
              width={24}
              alt="logo"
              className="mx-2"
            />
            <span>
              {drops} drop{drops === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
