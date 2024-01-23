import Stars from '../assets/stars.svg'
import './Styles/Location.scss'

interface Message {
    name: string;
    date: string;
    text: string;
}


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
    const messagesTSX = messagesData.map((message) => {
        return (
            <Message name={message.name} date={message.date} text={message.text} />
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
                <img src={Stars} alt="Stars" />
                <h1>The Outer Space Connector</h1>
            </header>

            <div id="MessageBoard">
                { AllMessages(props.messagesData) }
            </div>
        </div>
        </>
    )
}

export default Location;