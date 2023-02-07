import Overlay from "@/components/Overlay";
import React from "react";

const map = () => {
  return (
    <div className="w-full flex justify-end items-center">
      <div className="w-1/3">
        <Overlay />
      </div>
    </div>
  );
};

export default map;
