import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default async function getUserInfo(req, res) {
  const docSnap = await getDoc(doc(db, "users", req.body.uid));

  let output = {};

  if (docSnap.exists()) {
    output = docSnap.data();
  } else {
    await setDoc(doc(db, "users", req.body.uid), {
      bio: "Enter Bio...",
    });
    output = { bio: "Enter Bio..." };
  }

  res.status(200).json(output);
}
