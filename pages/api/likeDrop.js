import { db } from "../../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export default async function handler(req, res) {
  const docRef = doc(db, "records", req.body.id);
  await updateDoc(docRef, {
    likes: increment(1),
  });

  res.status(200).json();
}
