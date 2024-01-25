import { IMessage } from "../Interfaces/Message"

export default function Message (data: IMessage) {

    function isAuthor(messageAuthor: string) {
        const userName = localStorage.getItem("name");
        return messageAuthor === userName ? true : false;
    }

    return (
    <div className="message">
        <span className={`name-label ${isAuthor(data.name) ? 'message-author' : ''}`}>{data.name}</span>
        {/* <span className='date-label'>{data.date}</span> */}
        <p>{data.text}</p>
    </div>
    )
}