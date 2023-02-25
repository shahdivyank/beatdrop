import React from "react";
import Profiledrop from "./Profiledrop";
import PinkFriday from "../public/Pink_Friday_album_cover.jpg";
import { Col } from "react-bootstrap";

const profiledrops = new Array(30).fill({
  pic: PinkFriday,
  song: "Super Bass - Nicki Minaj",
  hours: "24",
  comments: 7,
  likes: 23,
  location: "Riverside, California",
});

const Profiledrops = () => {
  return (
    <div>
      <div className=" bg-white px-4 py-6 rounded-4xl">
        <div className="bg-[#F0F0F0] mx-7 px-4 py-2  w-fit rounded-t-lg">
          DROPS
        </div>
        <div className=" border-b-2 mx-7 border-[#F0F0F0]"></div>
        <section
          className=" h-[55vh] scrollbar-thumb-beatdrop-grey scrollbar-thumb-rounded-full scrollbar-thin overflow-y-auto"
          id=""
        >
          {profiledrops.map((profiledrop, index) => (
            <Col key={index} xl={1 / 20}>
              <Profiledrop
                index={index}
                pic={profiledrop.pic}
                song={profiledrop.song}
                hours={profiledrop.hours}
                comment={profiledrop.comments}
                likes={profiledrop.likes}
                location={profiledrop.location}
              />
            </Col>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Profiledrops;
