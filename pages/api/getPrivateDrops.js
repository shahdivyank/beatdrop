import { query, where, limit, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  console.log(req.body);
  const output = [];

  const fquery = query(
    collection(db, "records"),
    where("uid", "==", req.body.uid),
    limit(10)
  );

  const querySnapshot = await getDocs(fquery);
  querySnapshot.forEach((doc) => {
    output.push({ data: doc.data(), id: doc.id });
  });

  output.sort((a, b) => b.data.timestamp.seconds - a.data.timestamp.seconds);

  res.status(200).json(output);
}
