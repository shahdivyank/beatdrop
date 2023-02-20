import React from "react";
import Gmap from "./Gmap";
import Listing from "./Listing";

const Overlay = () => {
  return (
    <div className="w-full flex flex-row relative">
      <div className="z-10 top-1/2 -translate-y-1/2 absolute right-0">
        <Listing />
      </div>
      <div className="z-0">
        <Gmap />
      </div>
    </div>
  );
};

export default Overlay;
