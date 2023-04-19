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
  console.log(req.body.uid);
  const output = [];

  const fquery = query(
    collection(db, "records"),
    where("uid", "==", req.body.uid),
    orderBy("timestamp", "desc"),
    limit(10)
  );

  const querySnapshot = await getDocs(fquery);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });

  res.status(200).json(output);
}
