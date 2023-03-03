import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getUserInfo(req, res) {
  const docSnap = await getDoc(doc(db, "users", req.body.uid));
  res.status(200).json(docSnap.data());
}
