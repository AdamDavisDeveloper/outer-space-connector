import { useState } from "react";
import sendMessage from "../Helpers/SendMessage";

function MessageWindow (props: {
    userName: string,
    locationID: string,
    setMessageWindowOpen: (val:boolean) => void
}) {

    const [ text, setText ] = useState<string>("");

    function handleChange(event: any): void {
        setText(event.target.value);
    }

    function handleSend(): void {
        const data = {
            name: props.userName,
            date: `${new Date().getDate}`,
            text: text
        }
        sendMessage(data, props.locationID);
        props.setMessageWindowOpen(false);
    }

    return (
        <div id="CreateMessageWindow">
            <div className="message-heading">
                <h2>Leave a message for other travellers.</h2>
                <button onClick={() => {props.setMessageWindowOpen(false)}}>X</button>
            </div>

            <div className="messageForm">
                <textarea value={text} onChange={handleChange} placeholder="What do you want to say?" rows={10} cols={40} />
                <button onClick={handleSend}>Send Into Space</button>
            </div>
        </div>
    );
}

export default MessageWindow;