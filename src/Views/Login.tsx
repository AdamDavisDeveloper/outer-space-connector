import { useState } from 'react';
import BlackRabbit from '../assets/black-rabbit.gif';
import './Styles/Login.scss'

function Login () {
    const [ nameValue, setNameValue ] = useState("");

    const handleNameChange = (event: any) => {
        setNameValue(event.target.value);
    };

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
                    <button>ENTER</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;