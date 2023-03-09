import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const docRef = doc(db, "users", req.body.uid);
  await updateDoc(docRef, {
    bio: req.body.message,
  });

  res.status(200).json();
}
