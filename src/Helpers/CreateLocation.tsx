import { collection, doc, setDoc } from "firebase/firestore";
import firestoreDB from "../Firebase/firestore";

interface LocationData { id: string }
  
const createFirestoreLocation = async (locationData: LocationData) => {
    try {
        const locationDocRef = doc(firestoreDB, 'Locations', locationData.id);
        await setDoc(locationDocRef, locationData);

        // Initialize the 'Messages' sub-collection for this Location
        const messageDocRef = doc(collection(locationDocRef, 'Messages'));
        await setDoc(messageDocRef, { name: "", timestamp: "", text: "" });

        console.log(`Location document created with ID: ${locationDocRef.id}`);
        console.log(`Message document created with ID: ${messageDocRef.id}`);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

export default createFirestoreLocation;