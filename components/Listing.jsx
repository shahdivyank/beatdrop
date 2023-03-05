import React, { useEffect, useState } from "react";
import Song from "@/components/Song.jsx";
import View from "./View";
import Upload from "./Upload";
import axios from "axios";

const privateSongs = new Array(1).fill({
  song: "Bob B",
  band: "Rodrigo",
  posted: "1 HOUR",
  username: "Bobby",
  location: "Riverside, CA",
  description:
    "Lorem ipsum dolor idfji maidf midf ndms i fdmkfsjif mdfnij is there a max to the amout of writin g i can mput i ado nt nto know ",
  hashtags: ["LIVE", "LAUGH", "LOVE", "LIGHT", "LEARN"],
});

const Listing = () => {
  const [toggle, setToggle] = useState(0);
  const [toggleView, setToggleView] = useState(false);
  const [toggleUpload, setToggleUpload] = useState(false);
  const [song, setSong] = useState({
    description: "",
    likes: 0,
    name: "",
    songID: "",
    time: "",
    hashtags: [],
  });

  const [publicSongs, setPublicSongs] = useState([]);

  useEffect(() => {
    axios
      .post("/api/getPublicDrops")
      .then((response) => setPublicSongs(response.data))
      .catch((error) => console.log(error));
  }, []);

  const toggleViewHandler = (song) => {
    console.log(song.data);
    setSong(song.data);
    setToggleView(!toggleView);
  };

  return (
    <>
      <div className="flex justify-end">
        {toggleView && (
          <View
            name={song.name}
            song={song.songID}
            description={song.description}
            location={{ long: song.longitude, lat: song.latitude }}
            time={song.timestamp}
            likes={song.likes}
            hashtags={song.hashtags}
            album="https://upload.wikimedia.org/wikipedia/en/7/7b/Chungha_-_Querencia.jpg"
            setToggleView={setToggleView}
          />
        )}
        {toggleUpload && <Upload setToggleUpload={setToggleUpload} />}
        <div className="bg-beatdrop-lightgrey shadow-sm w-3.5/12 h-1/2 rounded-4xl py-4 px-3 my-10 mr-10 flex flex-col items-center">
          <div className=" text-white text-sm rounded-full w-11/12">
            <div className="flex justify-evenly">
              <button
                onClick={() => setToggle(0)}
                className={`rounded-l-full w-6/12 py-2 px-4 hover:bg-beatdrop-yellow ${
                  toggle === 0 ? "bg-beatdrop-yellow" : "bg-beatdrop-pink"
                }`}
              >
                public
              </button>
              <button
                onClick={() => setToggle(1)}
                className={`rounded-r-full  w-6/12 py-2 px-4 hover:bg-beatdrop-yellow ${
                  toggle === 1 ? "bg-beatdrop-yellow" : "bg-beatdrop-pink"
                }`}
              >
                private
              </button>
            </div>
          </div>

          {toggle === 0 && (
            <div className="my-4 px-2 h-[55vh] overflow-y-auto scrollbar-thumb-beatdrop-grey scrollbar-thumb-rounded-full scrollbar-thin">
              {Object.keys(publicSongs).map((song, index) => (
                <div
                  className="border-b-2 border-[#E3E3E3]"
                  key={index}
                  onClick={() => toggleViewHandler(publicSongs[song])}
                >
                  <Song
                    song={publicSongs[song].data.songID}
                    time={publicSongs[song].data.timestamp}
                    username={publicSongs[song].data.name}
                  />
                </div>
              ))}
            </div>
          )}

          {toggle === 1 && (
            <div className="my-4 px-2">
              {privateSongs.map((song, index) => (
                <div
                  className="border-b-2 border-[#E3E3E3]"
                  key={index}
                  onClick={() => toggleViewHandler(song)}
                >
                  <Song
                    song={song.song}
                    band={song.band}
                    time={song.time}
                    username={song.username}
                  />
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setToggleUpload(true)}
            className="hover:bg-beatdrop-yellow hover:text- bg-beatdrop-pink text-white text-sm rounded-full w-11/12 py-2 px-12 mt-12"
          >
            DROP A BEAT
          </button>
        </div>
      </div>
    </>
  );
};

export default Listing;
