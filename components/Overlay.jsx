import React, { useState } from "react";
import Gmap from "./Gmap";
import Listing from "./Listing";

const Overlay = ({ token, zoom, lat, lng }) => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="w-full flex flex-row relative">
      <div className="z-10 top-[10vh] -tanslate-y-1/2 max-h-full absolute right-0">
        <Listing token={token} toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="z-0">
        <Gmap
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
