import React from "react";
import Gmap from "./Gmap";
import Listing from "./Listing";

const Overlay = () => {
  return (
    <div className="w-full flex flex-row relative">
      <div className="z-10 top-[10vh] -tanslate-y-1/2 max-h-full absolute right-0">
        <Listing />
      </div>
      <div className="z-0">
        <Gmap />
      </div>
    </div>
  );
};

export default Overlay;
