import Stars from '../assets/stars.svg'
import BusStop from '../assets/dithered-bus-stop.png'
import { AllMessages } from '../Components/AllMessages';
//import { IMessage } from '../Interfaces/Message';

// Styles
import './Styles/Location.scss'
  

// interface LocationData { name: string; description?: string; }
  
//   const addLocation = async (locationData: LocationData) => {
//     try {
//       // Create a new document reference with an auto-generated ID
//       const docRef = doc(collection(firestoreDB, 'Locations'));
  
//       // Set the document data
//       await setDoc(docRef, locationData);
  
//       console.log(`Document written with ID: ${docRef.id}`);
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };



function Location (props: {
    locationID: string,
    userName: string,
    messagesData: any //IMessage[]
}) {
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
                <span>{ `${props.locationID}` }</span>
                <br />
                {/* <span>{ `${decrypted.latitude}, ${decrypted.longitude}` }</span> */}
            </header>

            <div id="MessageBoard">
                { AllMessages(props.messagesData) }
                {/* <button onClick={() => {addLocation({ name: "Adam", description: "This works!" })}}></button> */}
                {/* <button onClick={queryMessages}>Query Messages</button> */}
            </div>
        </div>
        </>
    )
}

export default Location;