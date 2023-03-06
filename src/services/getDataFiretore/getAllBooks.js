import {query, collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase/firebase';
export const getAllBooks = async () => {
    let documens = []
    const getCollectionBooks = query(collection(db, 'books'));
    const getDocumens = await getDocs(getCollectionBooks);
    getDocumens.forEach(doc => {
        documens.push({id: doc.id, ...doc.data()})
    })
    return documens
}
