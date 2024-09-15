import { Fetch } from "./Fetch";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

interface video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  channelTitle: string;
}

const search = async (query: string) => {
  const { items } = await Fetch({
    url:
      BASE_URL +
      `/search?part=snippet&maxResults=5&q=${query}&type=video&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`,
    method: "GET",
  });

  const result = items.map(({ snippet, id, channelTitle }: video) => ({
    id: id.videoId,
    song: snippet.title,
    image: { uri: snippet.thumbnails.default.url },
    artist: channelTitle,
    external: `https://www.youtube.com/watch?v=${id.videoId}`,
    preview: ``,
    length: 0,
  }));

  return result;
};

export default {
  search,
};
