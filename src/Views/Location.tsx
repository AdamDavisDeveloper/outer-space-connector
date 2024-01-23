import Stars from '../assets/stars.svg'
import BusStop from '../assets/dithered-bus-stop.png'
import { AllMessages } from '../Components/AllMessages';
import { IMessage } from '../Interfaces/Message';
import { URLEncryptedStringToCoordinates } from '../Helpers/CoordsEncrypt';

// Firebase / Firestore
import firestoreDB from '../Firebase/firestore';
import { getDocs, collection } from "firebase/firestore"; 

// Styles
import './Styles/Location.scss'


const currentUrl = window.location.href;
const url = new URL(currentUrl);
const pathSegments = url.pathname.split('/');
const locationID = pathSegments[1] ?? "";

//const encrypted = coordinatesToURLEncryptedString(43.0590269, -83.3245282, 12);
const decrypted = URLEncryptedStringToCoordinates(locationID, 12);

async function queryMessages() {
  const messagesRef = collection(firestoreDB, 'Locations', locationID, 'Messages');
  try {
    const snapshot = await getDocs(messagesRef);
    if (snapshot.empty) {
      console.log('No matching documents in Messages subcollection.');
      return;
    }
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
}



function Location (props: {
    userName: string,
    messagesData: IMessage[]
}) {
    
    queryMessages();

    return (
        <>
        <div id="Location" >
            <header>
                <img id="StarsSVG" src={Stars} alt="Stars" />
                <h1>The Outer Space Connector</h1>
                <span>It's the talk of the town!</span>
                <div id="BusStop">
                    <img src={BusStop} alt="Bus stop on the moon" />
                </div>
                <span>{ `${locationID}` }</span>
                <br />
                <span>{ `${decrypted.latitude}, ${decrypted.longitude}` }</span>
            </header>

            <div id="MessageBoard">
                { AllMessages(props.messagesData) }
            </div>
        </div>
        </>
    )
}

export default Location;