import Welcome from "@/components/Welcome";
import React from "react";
import Navigation from "@/components/Navigation";

const index = () => {
  return (
    <div className="text-beatdrop-teal">
      <Navigation />
      <Welcome />
    </div>
  );
};

export default index;
