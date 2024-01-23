import firebaseApp from "./config";
import { getFirestore } from "firebase/firestore";

const firestoreDB = getFirestore(firebaseApp);
export default firestoreDB;