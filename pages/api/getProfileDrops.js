import {
  query,
  where,
  orderBy,
  limit,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  const output = [];

  const fquery = query(
    collection(db, "records"),
    where("uid", "==", req.uid),
    orderBy("timestamp", "desc"),
    limit(10)
  );

  const querySnapshot = await getDocs(fquery);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    // output.push({ data: doc.data(), id: doc.id });
  });

  res.status(200).json(output);
}
