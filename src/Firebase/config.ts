// Firebase App-wide config
import { initializeApp } from "firebase/app";
const firebaseConfig = {

  appId:              import.meta.env.VITE_appId,
  apiKey:             import.meta.env.VITE_apiKey,
  projectId:          import.meta.env.VITE_projectId,
  authDomain:         import.meta.env.VITE_authDomain,
  storageBucket:      import.meta.env.VITE_storageBucket,
  messagingSenderId:  import.meta.env.VITE_messagingSenderId,
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;