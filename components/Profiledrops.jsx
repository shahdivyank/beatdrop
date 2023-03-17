import React from "react";
import Profiledrop from "./Profiledrop";
import { Accordion } from "react-bootstrap";

const Profiledrops = ({ privateDrops, token }) => {
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
                  song={profiledrop.song}
                  artist={profiledrop.artist}
                  image={profiledrop.url}
                  time={profiledrop.timestamp}
                  likes={profiledrop.likes}
                  location={{
                    long: profiledrop.longitude,
                    lat: profiledrop.latitude,
                  }}
                  description={profiledrop.description}
                  hashtags={profiledrop.hashtags}
                  token={token}
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
