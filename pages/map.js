import React, { useEffect, useState } from "react";
import Overlay from "@/components/Overlay";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const Map = () => {
  const [uid, setUID] = useState("");
  const [publicSongs, setPublicSongs] = useState([]);
  const [privateSongs, setPrivateSongs] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setUID(currentState.uid);
        axios
          .post("/api/getPublicDrops")
          .then((response) => setPublicSongs(response.data))
          .catch((error) => console.log(error));
        axios
          .post("/api/getPrivateDrops", { uid: currentState.uid })
          .then((response) => setPrivateSongs(response.data))
          .catch((error) => console.log(error));
      }
    });
    axios.post("/api/getToken").then((response) => {
      setToken(response.data);
    });
  }, []);

  return (
    <div className="w-full bg-purple-500">
      <title>Map</title>
      <div className="relative top-0 right-0 ">
        {uid && token && (
          <Overlay
            uid={uid}
            publicSongs={publicSongs}
            privateSongs={privateSongs}
            token={token}
          />
        )}
      </div>
    </div>
  );
};

export default Map;
