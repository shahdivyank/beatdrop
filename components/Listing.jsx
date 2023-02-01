import React, { useState } from "react";

const Listing = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="flex justify-end">
        <div className="bg-beatdrop-lightgrey w-3/12 h-1/2 rounded-4xl py-4 px-3 my-10 mr-10 flex flex-col items-center">
          <div className=" text-white text-sm rounded-full w-11/12">
            <div className="flex justify-evenly">
              <button
                onClick={() => setToggle(0)}
                className={`rounded-l-full w-5/12 py-2 px-4 ${
                  toggle === 0 ? "bg-beatdrop-yellow" : "bg-beatdrop-pink"
                }`}
              >
                public
              </button>
              <button
                onClick={() => setToggle(1)}
                className={`w-5/12 py-2 px-4 ${
                  toggle === 1 ? "bg-beatdrop-yellow" : "bg-beatdrop-pink"
                }`}
              >
                friends
              </button>
              <button
                onClick={() => setToggle(2)}
                className={`rounded-r-full  w-5/12 py-2 px-4 ${
                  toggle === 2 ? "bg-beatdrop-yellow" : "bg-beatdrop-pink"
                }`}
              >
                private
              </button>
            </div>
          </div>
          <button className="bg-beatdrop-pink text-white text-sm rounded-full w-11/12 py-2 px-12 mt-96">
            DROP A BEAT
          </button>
        </div>
      </div>
    </>
  );
};

export default Listing;
