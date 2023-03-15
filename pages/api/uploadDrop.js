import { addDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  try {
    await addDoc(collection(db, "records"), {
      ...req.body,
      timestamp: Timestamp.fromDate(new Date()),
    });
    console.log({
      ...req.body,
      timestamp: Timestamp.fromDate(new Date()),
    });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
}
