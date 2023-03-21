import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const deleteBook = async (bookID) => {
  try {
    await deleteDoc(doc(db, "books", bookID));
  } catch (e) {
    console.error(e);
  }
};
