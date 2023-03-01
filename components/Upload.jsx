import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

const Upload = ({ setToggleUpload }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setName(currentState.displayName);
      }
    });
  }, []);

  return (
    <div className="bg-red-500">
      {name}
      <FaTimes
        className="hover:text-red-500 hover:cursor-pointer"
        onClick={() => setToggleUpload(false)}
      />
    </div>
  );
};

export default Upload;
