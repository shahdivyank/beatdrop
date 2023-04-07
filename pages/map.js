import React, { useEffect, useState } from "react";
import Overlay from "@/components/Overlay";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const Map = () => {
  const [uid, setUID] = useState("");
  const [token, setToken] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [zoom] = useState(15);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setUID(currentState.uid);
        const response = await axios.post("/api/getToken");
        setToken(response.data);
      }
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  return (
    <div className="w-full bg-purple-500">
      <title>Map</title>
      <div className="relative top-0 right-0 ">
        {uid && lat && lng && (
          <Overlay uid={uid} zoom={zoom} lat={lat} lng={lng} token={token} />
        )}
      </div>
    </div>
  );
};

export default Map;
