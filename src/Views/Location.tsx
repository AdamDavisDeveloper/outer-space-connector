import Stars from '../assets/stars.svg'
import BusStop from '../assets/dithered-bus-stop.png'
import { AllMessages } from '../Components/AllMessages';
import createMessage from '../Helpers/CreateMessage';

// Styles
import './Styles/Location.scss'  

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
                <button onClick={() =>{createMessage({name: "Micah",date:"07-04-2000",text:"This is so cool!"},props.locationID)}}>Create Message</button>
            </div>
        </div>
        </>
    )
}

export default Location;