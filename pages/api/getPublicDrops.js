import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  const output = [];

  const fquery = query(
    collection(db, "records"),
    orderBy("timestamp", "desc"),
    limit(50)
  );

  const querySnapshot = await getDocs(fquery);
  querySnapshot.forEach((doc) => {
    output.push({ data: doc.data(), id: doc.id });
  });

  res.status(200).json(output);
}
