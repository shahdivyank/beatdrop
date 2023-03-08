import React from "react";
import Profiledrop from "./Profiledrop";
import PinkFriday from "../public/Pink_Friday_album_cover.jpg";
import { Accordion } from "react-bootstrap";

const profiledrops = new Array(30).fill({
  pic: PinkFriday,
  song: "Super Bass - Nicki Minaj",
  hours: "24",
  likes: 23,
  location: "Riverside, California",
  description: "THIS IS A VERY POGGERS MOMENT",
});

const Profiledrops = () => {
  return (
    <div>
      <div className=" bg-white px-4 py-6 rounded-4xl">
        <div className="bg-[#F0F0F0] mx-7 px-4 py-2 w-fit rounded-t-lg">
          DROPS
        </div>
        <div className=" border-b-2 mx-7 border-[#F0F0F0]"></div>
        <section className="h-[50vh] w-[55vw] scrollbar-thumb-beatdrop-grey scrollbar-thumb-rounded-full scrollbar-thin overflow-y-auto">
          <Accordion>
            {profiledrops.map((profiledrop, index) => (
              <Profiledrop
                key={index}
                index={index}
                pic={profiledrop.pic}
                song={profiledrop.song}
                hours={profiledrop.hours}
                likes={profiledrop.likes}
                location={profiledrop.location}
                description={profiledrop.description}
              />
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
};

export default Profiledrops;
