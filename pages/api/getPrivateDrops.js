import { query, where, limit, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import axios from "axios";

export default async function handler(req, res) {
  console.log(req.body);
  const output = [];

  const fquery = query(
    collection(db, "records"),
    where("uid", "==", req.body.uid),
    limit(50)
  );

  const querySnapshot = await getDocs(fquery);
  querySnapshot.forEach((doc) => {
    output.push({ data: doc.data(), id: doc.id });
  });

  output.sort((a, b) => b.data.timestamp.seconds - a.data.timestamp.seconds);

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

  // const headers = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer BQBo7NbPnGwMnyjNPq9X_ft6VzMu3fPHv6o7rK_IUNEVZ8waoVlsDNYHJNPVFrZ_d1Y2Sj3WycfYsjdSUh1TgMIg98oJroV-LeIKegtyXkd-XVLj5iPT`,
  //   },
  // };

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
