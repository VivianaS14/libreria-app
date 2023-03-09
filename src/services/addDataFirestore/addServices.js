import {collection, addDoc} from 'firebase/firestore';
import {db} from "../../firebase/firebase.js";
export const addService = async (dataService) => {
    try {
        await addDoc(collection(db, 'services'), dataService)
    }catch (e) {
        console.error(e)
    }
}