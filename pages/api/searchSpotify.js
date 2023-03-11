import axios from "axios";

export default async function handler(req, res) {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${req.body.token}`,
    },
  };

  const response = await axios.get(
    `https://api.spotify.com/v1/search?query=${req.body.song}%20artist:${req.body.artist}&type=track&limit=5`,
    headers
  );

  res.status(200).json(response.data.tracks.items);
}
