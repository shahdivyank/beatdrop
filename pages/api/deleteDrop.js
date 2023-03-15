import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default async function handler(req, res) {
  await deleteDoc(doc(db, "records", req.body.id));

  res.status(200).json();
}
