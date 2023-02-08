import React from "react";
import Profiledrop from "./Profiledrop";
import PinkFriday from "../public/Pink_Friday_album_cover.jpg";

const Profiledrops = () => {
  console.log(PinkFriday);
  return (
    <div>
      <Profiledrop
        pic={PinkFriday}
        song="Super Bass - Nicki Minaj"
        hours="24"
        comments={7}
        likes={23}
        location="Riverside, California"
      />
    </div>
  );
};

export default Profiledrops;
