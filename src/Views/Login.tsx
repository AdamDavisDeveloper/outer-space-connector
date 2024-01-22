import { useState } from 'react';
import BlackRabbit from '../assets/black-rabbit.gif';
import './Styles/Login.scss'

function Login (props: {
    setUserName: (input: string) => void
}) {
    const [ nameValue, setNameValue ] = useState("");

    const handleNameChange = (event: any) => {
        const inputVal = event.target.value;
        setNameValue(inputVal);
    };
    const handleEnter = () => {
        props.setUserName(nameValue);
        localStorage.setItem("name", nameValue);
    }

    return (
        <>
        <div id="Login">
            <div className="rabbit-gif">
                <img src={BlackRabbit} alt="A black rabbit running in place" />
            </div>
            <div id="NameForm">
                <label htmlFor="NameForm">What do you want to be called?</label>
                <div>
                    <input value={nameValue} onChange={handleNameChange} type="text" />
                    <button onClick={handleEnter}>ENTER</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;