import React from "react";
import { FaTimes } from "react-icons/fa";

const Upload = ({ setToggleUpload }) => {
  return (
    <div className="bg-red-500">
      HELLO THIS IS TESTING WHERE THE UPLOAD IS
      <FaTimes
        className="hover:text-red-500 hover:cursor-pointer"
        onClick={() => setToggleUpload(false)}
      />
    </div>
  );
};

export default Upload;
