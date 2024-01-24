import { IMessage } from "../Interfaces/Message"

export default function Message (data: IMessage) {
    return (
    <div className="message">
        <span className='name-label'>{data.name}</span>
        {/* <span className='date-label'>{data.date}</span> */}
        <p>{data.text}</p>
    </div>
    )
}