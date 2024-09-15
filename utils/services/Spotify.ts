import { Fetch } from "./Fetch";

interface track {
  id: string;
  name: string;
  album: {
    images: [
      {
        url: string;
      },
    ];
    artists: [
      {
        name: string;
      },
    ];
  };
  external_urls: {
    spotify: string;
  };
  preview_url: string;
  duration_ms: number;
}

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

const search = async (
  token: string = "",
  query: string = "",
  artist: string = "",
) => {
  if (token === "" || query === "" || artist === "") {
    return null;
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const {
    tracks: { items },
  } = await Fetch({
    method: "GET",
    url: `https://api.spotify.com/v1/search?query=${query}%20artist:${artist}&type=track&limit=5`,
    headers,
  });

  const results = items.map(
    ({ id, name, album, external_urls, preview_url, duration_ms }: track) => ({
      id,
      song: name,
      image: { uri: album.images[0].url },
      artist: album.artists[0].name,
      external: external_urls.spotify,
      preview: preview_url,
      length: duration_ms / 1000,
    }),
  );

  return results;
};

export default {
  getToken,
  search,
};
