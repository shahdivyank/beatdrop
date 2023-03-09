import React, { useEffect, useState } from "react";
import Overlay from "@/components/Overlay";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Map = () => {
  const [uid, setUID] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setUID(currentState.uid);
      }
    });
  }, []);

  return (
    <div className="w-full bg-purple-500">
      <title>Map</title>
      <div className="relative top-0 right-0">
        {uid && <Overlay uid={uid} />}
      </div>
    </div>
  );
};

export default Map;
