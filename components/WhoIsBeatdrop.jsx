import React from "react";

const WhoIsBeatdrop = () => {
  return (
    <section id="introduction" className="pt-10 font-outfit pb-10">
      <p className="text-6xl font-semibold">who is beatdrop</p>
      <div className="bg-white rounded-3xl p-4">
        <div className="border-l-2 border-beatdrop-darkgrey m-2">
          <p className="text-md ml-4 px-4">
            hello hello. BeatDrop is based on a couple of college students at
            University of California, Riverside. Ready to tackle the world.
            Ready to conquer fears. Ready to achieve our dreams. Along the way
            we are making sure to enjoy the journey with music. At this moment,
            ‘we’ includes:
          </p>
          <div className="px-9">
            <ul className="list-disc">
              <li className="text-[#218E8A]">Mariam Golwalla</li>
              <li className="text-[#E12A62]">Zergio Ruvalcaba</li>
              <li className="text-[#BABABA]">William Huang</li>
              <li className="text-[#3B054F]">Rodrigo Lamas</li>
              <li className="text-[#FF7200]">Bobby Lerias</li>
              <li className="text-[#FEB538]">Divyank Shah</li>
            </ul>
          </div>
          <p className="text-md ml-4 px-4">
            But as of this exact second, ‘we’ includes you. BeatDrop is you.
            BeatDrop is us. Thank you for being here and taking on life with us.
            <span className="text-beatdrop-pink font-bold">
              {" "}
              Pick yourself up and drop the beat!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsBeatdrop;
