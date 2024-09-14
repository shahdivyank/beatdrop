import { Fetch } from "./Fetch";

const getToken = async () => {
  const body = `grant_type=client_credentials&client_id=${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET}`;

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await Fetch({
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers,
    body,
  });

  return response;
};

export default {
  getToken,
};
