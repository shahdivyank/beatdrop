import axios from "axios";

export default async function handler(req, res) {
  const body = `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`;

  const headers = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    body,
    headers
  );

  res.status(200).json(response.data.access_token);
}
