import React from "react";

const Song = ({ band, song, username, time }) => {
  return (
    <div className="song">
      <h1>
        {band} - {song}
      </h1>
      <h3> Posted by {username}</h3>
      <h4>{time} AGO</h4>
    </div>
  );
};

export default Song;
