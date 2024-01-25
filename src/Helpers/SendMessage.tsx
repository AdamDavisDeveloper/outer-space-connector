// Firebase / Firestore
import firestoreDB from '../Firebase/firestore';
import { collection, doc, setDoc } from "firebase/firestore";
import { IMessage } from '../Interfaces/Message';
  
const sendMessage = async (messageData: IMessage, locationID: string) => {
    try {
        // Create a new document reference with an auto-generated ID
        const docRef = doc(collection(firestoreDB, 'Locations', locationID, 'Messages'));
        await setDoc(docRef, messageData);

        console.log(`Document written with ID: ${docRef.id}`);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

export default sendMessage;