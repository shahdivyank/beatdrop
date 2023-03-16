import React, { useState } from "react";
import Gmap from "./Gmap";
import Listing from "./Listing";

const Overlay = ({ uid, publicSongs, privateSongs, token, zoom, lat, lng }) => {
  const [toggle, setToggle] = useState(0);
  console.log(zoom, lat, lng);

  return (
    <div className="w-full flex flex-row relative">
      <div className="z-10 top-[10vh] -tanslate-y-1/2 max-h-full absolute right-0">
        <Listing
          uid={uid}
          publicSongs={publicSongs}
          privateSongs={privateSongs}
          token={token}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <div className="z-0">
        <Gmap
          publicSongs={publicSongs}
          privateSongs={privateSongs}
          token={token}
          toggle={toggle}
          zoomVal={zoom}
          latitude={lat}
          longitude={lng}
        />
      </div>
    </div>
  );
};

export default Overlay;
