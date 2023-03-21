import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const getUserService = async (status, phone) => {
  let user = {};
  if (status) {
    const userR = collection(db, "users");
    const res = query(userR, where("email", "==", status.email));
    const querySnapshot = await getDocs(res);
    querySnapshot.forEach((doc) => {
      user.fullName = doc.data().fullName;
      user.phone = doc.data().phone;
    });
    if (!user.fullName) {
      user.phone = phone;
      user.fullName = status.displayName;
    }
  }
  return user;
};
export const getAllService = async () => {
  let documens = [];
  const getCollectionService = query(collection(db, "services"));
  const getDocumens = await getDocs(getCollectionService);
  getDocumens.forEach((doc) => {
    documens.push({ id: doc.id, ...doc.data() });
  });
  return documens;
};
