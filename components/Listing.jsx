import React, { useState } from "react";
import Song from "@/components/Song.jsx";
import View from "./View";
import Upload from "./Upload";

const Listing = ({ uid, publicSongs, privateSongs, token }) => {
  const [toggle, setToggle] = useState(0);
  const [toggleView, setToggleView] = useState(false);
  const [toggleUpload, setToggleUpload] = useState(false);
  const [selectedSong, setSelectedSong] = useState({});

  return (
    <>
      <div className="flex justify-end">
        {toggleView && (
          <View
            id={selectedSong.id}
            name={selectedSong.name}
            song={selectedSong.song}
            artist={selectedSong.artist}
            description={selectedSong.description}
            location={{
              long: selectedSong.longitude,
              lat: selectedSong.latitude,
            }}
            image={selectedSong.image}
            time={selectedSong.time}
            dropLikes={selectedSong.likes}
            hashtags={selectedSong.hashtags}
            externalurl={selectedSong.externalurl}
            setToggleView={setToggleView}
          />
        )}
        {toggleUpload && token && (
          <Upload token={token} setToggleUpload={setToggleUpload} />
        )}
        <div className="bg-beatdrop-lightgrey shadow-sm w-3.5/12 h-1/2 rounded-4xl py-4 px-3 my-10 mr-10 flex flex-col items-center">
          <div className=" text-white text-sm rounded-full flex justify-center w-11/12">
            <div className="flex justify-evenly w-[25vw] ">
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
            <div className="my-4 px-2 h-[55vh] overflow-y-auto scrollbar-thumb-beatdrop-grey scrollbar-thumb-rounded-full scrollbar-thin ">
              {publicSongs.map((song, index) => (
                <div className="border-b-2 border-[#E3E3E3] " key={index}>
                  {token && song.data && (
                    <Song
                      id={song.id}
                      songID={song.data.songID}
                      time={song.data.timestamp}
                      username={song.data.name}
                      hashtags={song.data.hashtags}
                      longitude={song.data.longitude}
                      latitude={song.data.latitude}
                      description={song.data.description}
                      setToggleView={setToggleView}
                      setSelectedSong={setSelectedSong}
                      setToggleUpload={setToggleUpload}
                      selectedSong={selectedSong}
                      toggleView={toggleView}
                      token={token}
                      name={song.data.name}
                      likes={song.data.likes}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {toggle === 1 && (
            <div className="my-4 px-2">
              {privateSongs.map((song, index) => (
                <div className="border-b-2 border-[#E3E3E3]" key={index}>
                  {token && song.data && (
                    <Song
                      id={song.id}
                      songID={song.data.songID}
                      time={song.data.timestamp}
                      username={song.data.name}
                      hashtags={song.data.hashtags}
                      longitude={song.data.longitude}
                      latitude={song.data.latitude}
                      description={song.data.description}
                      setToggleView={setToggleView}
                      setSelectedSong={setSelectedSong}
                      selectedSong={selectedSong}
                      toggleView={toggleView}
                      setToggleUpload={setToggleUpload}
                      token={token}
                      name={song.data.name}
                      likes={song.data.likes}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => {
              setToggleUpload(true);
              setToggleView(false);
            }}
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
