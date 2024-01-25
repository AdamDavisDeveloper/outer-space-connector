import { useState } from 'react';
import Stars from '../assets/stars.svg'
import BusStop from '../assets/dithered-bus-stop.png'
import { AllMessages } from '../Components/AllMessages';
import MessageWindow from '../Components/MessageWindow';

// Styles
import './Styles/Location.scss'  

function Location (props: {
    locationID: string,
    userName: string,
    messagesData: any //IMessage[]
}) {

    const [ messageWindowOpen, setMessageWindowOpen ] = useState<boolean>(false);

    return (
        <>
        <div id="Location" >
            <header>
                <img id="StarsSVG" src={Stars} alt="Stars" />
                <h1>The Outer Space Connector</h1>
                <span>It's the talk of the galaxy!</span>
                <div id="BusStop">
                    <img src={BusStop} alt="Bus stop on the moon" />
                </div>
                <span>{ `Connector: ${props.locationID}` }</span>
            </header>

            { !messageWindowOpen &&
                <div id="MessageBoard">
                    <h2>Star Board</h2>
                    <div className="underline-100"></div>
                    <div id="MessagesWrapper">
                        { AllMessages(props.messagesData) }
                    </div>
                    <div className="underline-100 mar-t-1rem"></div>
                    <button onClick={() => { setMessageWindowOpen(true) }}>Leave a Message</button>
                </div>
            }

            { messageWindowOpen &&
                <>
                <MessageWindow 
                userName={props.userName}
                locationID={props.locationID} 
                setMessageWindowOpen={setMessageWindowOpen}
                 />
                </>
            }
        </div>
        </>
    )
}

export default Location;