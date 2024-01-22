import { useEffect, useState } from 'react';
import './App.scss'
import Location from './Views/Location';
import Login from './Views/Login';

function App() {
  /* 
    This will handle querying the URI and pulling data from Firebase. 
    The Login and Location views will be displayed within this component as needed.
  */

  const [ userName, setUserName ] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name") ?? "");
  }, []);

  return (
    <>
    <div id="App">
      { !userName &&
        <Login setUserName={setUserName} />
      }
      { userName &&
        <Location />
      }
    </div>
    </>
  )
}

export default App;
