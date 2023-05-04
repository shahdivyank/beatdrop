import {
  query,
  orderBy,
  limit,
  getDocs,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import axios from "axios";

export default async function handler(req, res) {
  const output = [];

  const fquery = query(
    collection(db, "records"),
    where("uid", "!=", req.body.uid),
    orderBy("timestamp", "desc"),
    limit(10)
  );

  const querySnapshot = await getDocs(fquery);
  querySnapshot.forEach((doc) => {
    output.push({ data: doc.data(), id: doc.id });
  });

  let tracks = "";

  output.forEach((element) => {
    tracks += `${element.data.songID},`;
  });

  tracks = tracks.substring(0, tracks.length - 1);

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${req.body.token}`,
    },
  };

  const response = await axios.get(
    `https://api.spotify.com/v1/tracks?ids=${tracks}`,
    headers
  );

  const result = [];

  for (let i = 0; i < response.data.tracks.length; i++) {
    result.push({
      ...output[i].data,
      song: response.data.tracks[i].name,
      url: response.data.tracks[i].album.images[0].url,
      artist: response.data.tracks[i].album.artists[0].name,
      externalurl: response.data.tracks[i].external_urls.spotify,
      previewurl: response.data.tracks[i].preview_url,
      id: output[i].id,
    });
  }

  res.status(200).json(result);
}
