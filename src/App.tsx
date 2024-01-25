import { useEffect, useState } from 'react';
import Location from './Views/Location';
import Admin from './Views/Admin';
import Login from './Views/Login';
import { IMessage } from './Interfaces/Message';

// Firebase / Firestore
import firestoreDB from './Firebase/firestore';
import { 
    getDocs,
    collection,
} from "firebase/firestore";

// Styles
import './App.scss'


function App() {
  /* 
    This will handle querying the URI and pulling data from Firebase. 
    The Login and Location views will be displayed within this component as needed.
  */
  //const encrypted = coordinatesToURLEncryptedString(43.0590269, -83.3245282, 12);
  //const decrypted = URLEncryptedStringToCoordinates(locationID, 12);

  const [ userName, setUserName ]   = useState<string>("");
  const [ messages, setMessages ]   = useState<IMessage[]>([]);
  const locationID = new URL(window.location.href).pathname.split('/')[1] ?? "";
  
  useEffect(() => {
    setUserName(localStorage.getItem("name") ?? "");

    async function fetchMessages() {
      try {
        const result = await queryMessages();
        if (Array.isArray(result)) {
          setMessages(result);
        } else {
          console.error('Failed to fetch messages:', result);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }

    fetchMessages();
  }, []);

async function queryMessages() {
    const messagesRef = collection(firestoreDB, 'Locations', locationID, 'Messages');
    const allMessages: {}[] = [];
    try {
      const snapshot = await getDocs(messagesRef);
      if (snapshot.empty) {
        return 'No matching documents in Messages subcollection.';
      }
      snapshot.forEach(doc => {
        allMessages.push({ id: doc.id, data: doc.data() });
      });
      return allMessages;
    } catch (error) {
      return error;
    }
  }

  if(locationID === "admin") {
    return (
      <Admin />
    )
  } else return (
    <>
    <div id="App">
      { !userName &&
        <Login setUserName={setUserName} />
      }
      { userName &&
        <Location locationID={locationID} userName={userName} messagesData={messages} />
      }
    </div>
    </>
  )
}

export default App;
