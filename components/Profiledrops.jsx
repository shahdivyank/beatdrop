import React from "react";
import Profiledrop from "./Profiledrop";
import { Accordion } from "react-bootstrap";

const Profiledrops = ({ privateDrops }) => {
  return (
    <div>
      <div className=" bg-white px-4 py-6 rounded-4xl">
        <div className="bg-[#F0F0F0] mx-7 px-4 py-2 w-fit rounded-t-lg">
          DROPS
        </div>
        <div className=" border-b-2 mx-7 border-[#F0F0F0]"></div>
        <section className="h-[50vh] w-[55vw] scrollbar-thumb-beatdrop-grey scrollbar-thumb-rounded-full scrollbar-thin overflow-y-auto">
          <Accordion>
            {privateDrops.length > 0 &&
              privateDrops.map((profiledrop, index) => (
                <Profiledrop
                  key={index}
                  index={index}
                  id={profiledrop.id}
                  song={profiledrop.data.songID}
                  time={profiledrop.data.timestamp}
                  likes={profiledrop.data.likes}
                  location={{
                    long: profiledrop.data.longitude,
                    lat: profiledrop.data.latitude,
                  }}
                  description={profiledrop.data.description}
                  hashtags={profiledrop.data.hashtags}
                />
              ))}
          </Accordion>
          {privateDrops.length === 0 && (
            <p className="mt-4 ml-7 text-xl">No Beatdrops to Display!</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profiledrops;
