import { IMessage } from "../Interfaces/Message";
import Message from "./Message";

export const AllMessages = (messagesData: IMessage[]) => {
    const messagesTSX = messagesData.map((raw, i) => {
        const message = raw.data;
        if(raw.data.name === '') return;
        return (
            <Message key={i} id={raw.id} name={message.name} date={message.date} text={message.text} />
        )
    });
    return messagesTSX;
}