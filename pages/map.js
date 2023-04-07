import React, { useEffect, useState } from "react";
import Overlay from "@/components/Overlay";
import axios from "axios";

const Map = () => {
  const [token, setToken] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [zoom] = useState(15);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
    const getToken = async () => {
      const response = await axios.post("/api/getToken");
      setToken(response.data);
    };

    getToken();
  }, []);

  return (
    <div className="w-full bg-purple-500">
      <title>Map</title>
      <div className="relative top-0 right-0 ">
        {lat && lng && (
          <Overlay zoom={zoom} lat={lat} lng={lng} token={token} />
        )}
      </div>
    </div>
  );
};

export default Map;
