import React from "react";
import Gmap from "./Gmap";
import Listing from "./Listing";

const Overlay = () => {
  return (
    <div className="w-full flex flex-row relative">
      <div className="z-20 max absolute inset-y-1/4 right-0">
        <Listing />
      </div>
      <div className="z-10">
        <Gmap />
      </div>
    </div>
  );
};

export default Overlay;
