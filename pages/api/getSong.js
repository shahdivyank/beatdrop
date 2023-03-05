import axios from "axios";

export default async function handler(req, res) {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${req.body.token}`,
    },
  };

  const response = await axios.get(
    `https://api.spotify.com/v1/tracks/${req.body.songID}`,
    headers
  );

  res.status(200).json({
    song: response.data.name,
    url: response.data.album.images[response.data.album.images.length - 1].url,
    artist: response.data.album.artists.name,
  });
}
