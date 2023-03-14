import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const deleteService = async (serviceID) => {
  try {
    await deleteDoc(doc(db, "services", serviceID));
  } catch (e) {
    console.error(e);
  }
};
