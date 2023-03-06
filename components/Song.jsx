import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import axios from "axios";

const Song = ({
  songID,
  username,
  time,
  token,
  hashtags,
  longitude,
  latitude,
  description,
  setSelectedSong,
  toggleView,
  setToggleView,
  name,
  likes,
}) => {
  const [song, setSong] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    axios
      .post("/api/getSong", { songID: songID, token: token })
      .then((response) => {
        console.log(response);
        setSong(response.data.song);
        setImage(response.data.url);
        setArtist(response.data.artist);
      });
  }, []);

  const handleSelect = () => {
    setSelectedSong({
      song: song,
      artist: artist,
      image: image,
      username: username,
      hashtags: hashtags,
      longitude: longitude,
      latitude: latitude,
      description: description,
      time: time,
      name: name,
      likes: likes,
    });
    setToggleView(!toggleView);
  };

  return (
    <button
      className="flex items-center px-4 py-6 hover:bg-[#F0F0F0]"
      onClick={handleSelect}
    >
      {song && image && artist && (
        <>
          <div className="flex items-center gap-3">
            <img
              src={image}
              placeholder="blur"
              blurd="true"
              alt="album cover"
              className="rounded-full w-1/5"
            />
            <div className="flex flex-col items-start !text-black">
              <p className="text-songName font-semibold m-0"> {song}</p>
              <p className="text-postedBy m-0"> Posted by {username}</p>
              <p className="text-timePosted m-0">
                {Math.ceil(
                  (new Date().getTime() -
                    new Date(time.seconds * 1000).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                DAYS AGO
              </p>
            </div>
          </div>
          <div className="text-4xl text-beatdrop-darkergrey">
            <HiArrowNarrowRight />
          </div>
        </>
      )}
    </button>
  );
};

export default Song;
