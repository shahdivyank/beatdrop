import Overlay from "@/components/Overlay";
import React from "react";

const map = () => {
  return (
    <div className="w-full bg-purple-500">
      <div className="relative top-0 right-0">
        <Overlay />
      </div>
    </div>
  );
};

export default map;
