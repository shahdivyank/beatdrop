import React from "react";
import Gmap from "./Gmap";
import Listing from "./Listing";

const Overlay = ({ uid, publicSongs, privateSongs, token }) => {
  return (
    <div className="w-full flex flex-row relative">
      <div className="z-10 top-[10vh] -tanslate-y-1/2 max-h-full absolute right-0 w-[25vw] ">
        <Listing
          uid={uid}
          publicSongs={publicSongs}
          privateSongs={privateSongs}
          token={token}
        />
      </div>
      <div className="z-0">
        <Gmap
          publicSongs={publicSongs}
          privateSongs={privateSongs}
          token={token}
        />
      </div>
    </div>
  );
};

export default Overlay;
