import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  try {
    await addDoc(collection(db, "records"), {
      ...req.body,
      time: new Timestamp(Math.round(new Date().getTime() / 1000)),
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
