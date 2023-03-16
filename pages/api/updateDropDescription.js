import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const docRef = doc(db, "records", req.body.id);
  await updateDoc(docRef, {
    description: req.body.description,
  });

  res.status(200).json();
}
