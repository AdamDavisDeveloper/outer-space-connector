import Stars from '../assets/stars.svg'
import BusStop from '../assets/dithered-bus-stop.png'
import './Styles/Location.scss'
import { coordinatesToURLEncryptedString, URLEncryptedStringToCoordinates } from '../Helpers/CoordsEncrypt';

interface Message {
    name: string;
    date: string;
    text: string;
}

const encrypted = coordinatesToURLEncryptedString(43.0590269, -83.3245282, 12);
const decrypted = URLEncryptedStringToCoordinates(encrypted, 12);


function Message (data: Message) {
    return (
    <div className="message">
        <span className='name-label'>{data.name}</span>
        <span className='date-label'>{data.date}</span>
        <p>{data.text}</p>
    </div>
    )
}

const AllMessages = (messagesData: Message[]) => {
    const messagesTSX = messagesData.map((message, i) => {
        return (
            <Message key={i} name={message.name} date={message.date} text={message.text} />
        )
    });
    return messagesTSX;
}

function Location (props: {
    userName: string,
    messagesData: Message[]
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
                <span>{ `${encrypted}` }</span>
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