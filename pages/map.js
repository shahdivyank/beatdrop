import React from "react";
import Overlay from "@/components/Overlay";

const map = () => {
  return (
    <div className="w-full bg-purple-500">
      <title>Map</title>
      <div className="relative top-0 right-0">
        <Overlay />
      </div>
    </div>
  );
};

export default map;
