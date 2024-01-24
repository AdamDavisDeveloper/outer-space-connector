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
// const firebaseConfig = {

//   appId:              'AIzaSyDPdSHaNG_elQe3o8klEjK_MG6sOIdGZ6w',
//   apiKey:             'the-outer-space-connector.firebaseapp.com',
//   projectId:          'the-outer-space-connector',
//   authDomain:         'the-outer-space-connector.appspot.com',
//   storageBucket:      '702503419854',
//   messagingSenderId:  '1:702503419854:web:174e634f827ecadea5359f',
// };

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;