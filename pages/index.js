import IndexSVG from "@/components/SVGs/IndexSVG";
import Welcome from "@/components/Welcome";
import React from "react";

const index = () => {
  return (
    <div className="m-0 p-0 h-screen overflow-hidden">
      <title>Beatdrop </title>
      <IndexSVG />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Welcome />
      </div>
    </div>
  );
};

export default index;
