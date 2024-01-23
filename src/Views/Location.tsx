import Stars from '../assets/stars.svg'
import BusStop from '../assets/dithered-bus-stop.png'
import Message from '../Components/Message';
import { IMessage } from '../Interfaces/Message';
import { URLEncryptedStringToCoordinates } from '../Helpers/CoordsEncrypt';

// Styles
import './Styles/Location.scss'


const currentUrl = window.location.href;
const url = new URL(currentUrl);
const pathSegments = url.pathname.split('/');
const locationID = pathSegments[1] ?? "";

//const encrypted = coordinatesToURLEncryptedString(43.0590269, -83.3245282, 12);
const decrypted = URLEncryptedStringToCoordinates(locationID, 12);

const AllMessages = (messagesData: IMessage[]) => {
    const messagesTSX = messagesData.map((message, i) => {
        return (
            <Message key={i} name={message.name} date={message.date} text={message.text} />
        )
    });
    return messagesTSX;
}

function Location (props: {
    userName: string,
    messagesData: IMessage[]
}) {
    return (
        <>
        <div id="Location" >
            <header>
                <img id="StarsSVG" src={Stars} alt="Stars" />
                <h1>The Outer Space Connector</h1>
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