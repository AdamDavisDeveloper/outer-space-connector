import { IMessage } from "../Interfaces/Message";
import Message from "./Message";

export const AllMessages = (messagesData: IMessage[]) => {
    const messagesTSX = messagesData.map((message, i) => {
        return (
            <Message key={i} name={message.name} date={message.date} text={message.text} />
        )
    });
    return messagesTSX;
}