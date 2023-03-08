import {collection, addDoc} from 'firebase/firestore';
import {db} from "../../firebase/firebase.js";
export const addBook = async (book) => {
    try {
        await addDoc(collection(db, 'books'), book)
    }catch (e) {
        console.error(e)
    }
}