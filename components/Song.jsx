import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Song = ({
  id,
  song,
  image,
  artist,
  previewurl,
  externalurl,
  username,
  time,
  hashtags,
  longitude,
  latitude,
  description,
  setSelectedSong,
  toggleView,
  setToggleView,
  setToggleUpload,
  name,
  likes,
}) => {
  const handleSelect = () => {
    setSelectedSong({
      song: song,
      artist: artist,
      image: image,
      externalurl: externalurl,
      previewurl: previewurl,
      username: username,
      hashtags: hashtags,
      longitude: longitude,
      latitude: latitude,
      description: description,
      time: time,
      name: name,
      likes: likes,
      id: id,
    });
    setToggleView(!toggleView);
    if (!toggleView) {
      setToggleUpload(false);
    }
  };

  return (
    <button
      className="flex items-center px-4 py-6 hover:bg-[#F0F0F0]"
      onClick={handleSelect}
    >
      {song && image && artist && (
        <>
          <div className="flex items-center justify-start gap-3">
            <img
              src={image}
              placeholder="blur"
              blurd="true"
              alt="album cover"
              className="rounded-full w-1/5"
            />
            <div className="flex flex-col items-start justify-start !text-black ">
              <div className="text-songName font-semibold m-0 p-0 text-left ">
                {" "}
                {song}
              </div>
              <p className="text-artistName font-semibold m-0"> {artist}</p>

              <p className="text-postedBy m-0 "> Posted by {username}</p>
              <p className="text-timePosted m-0 ">
                {Math.ceil(
                  (new Date().getTime() -
                    new Date(time.seconds * 1000).getTime()) /
                    (1000 * 60 * 60 * 24)
                ) == 1
                  ? "LESS THAN 24 HOURS AGO"
                  : `${Math.ceil(
                      (new Date().getTime() -
                        new Date(time.seconds * 1000).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )} DAYS AGO`}
              </p>
            </div>
          </div>
          <div className="text-5xl text-beatdrop-darkergrey">
            <HiArrowNarrowRight />
          </div>
        </>
      )}
    </button>
  );
};

export default Song;
