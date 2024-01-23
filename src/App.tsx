import { useEffect, useState } from 'react';
import './App.scss'
import Location from './Views/Location';
import Login from './Views/Login';

interface Message {
  name: string;
  date: string;
  text: string;
}

function App() {
  /* 
    This will handle querying the URI and pulling data from Firebase. 
    The Login and Location views will be displayed within this component as needed.
  */

  const [ userName, setUserName ]   = useState("");
  const [ messages, setMessages ]   = useState<Message[]>([]);

  useEffect(() => {
    setUserName(localStorage.getItem("name") ?? "");
    setMessages([{name: "Adam", date: "04-23-2023", text: "What is this?"}]);
  }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const querySnapshot = await firestore.collection('yourCollection').get();
//             const fetchedMessages: Message[] = querySnapshot.docs.map(doc => doc.data() as Message);
//             setMessages(fetchedMessages);
//         } catch (error) {
//             console.error("Error fetching messages:", error);
//             // Handle the error appropriately
//         }
//     };

//     fetchData();
// }, []);


  return (
    <>
    <div id="App">
      { !userName &&
        <Login setUserName={setUserName} />
      }
      { userName &&
        <Location userName={userName} messagesData={messages} />
      }
    </div>
    </>
  )
}

export default App;
