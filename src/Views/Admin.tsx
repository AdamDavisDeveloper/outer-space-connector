import { useEffect, useState } from "react";
import './Styles/Admin.scss'
import createFirestoreLocation from "../Helpers/CreateLocation";
import { coordinatesToURLEncryptedString } from "../Helpers/CoordsEncrypt";

function Admin() {
    const [ latitude, setLatitude ]     = useState("");
    const [ longitude, setLongitude ]   = useState("");
    const [ url, setURL ]               = useState("");
    const hostname = "https://the-outer-space-connector.web.app/"

    useEffect(() => {
        console.debug("URL =>", url)
    }, [url]);

    const handleLatitudeChange = (event: any) => {
        setLatitude(event.target.value);
    };
    const handleLongitudeChange = (event: any) => {
        setLongitude(event.target.value);
    };
    const handleLocationCreate = () => {
        const locationData = {
            id: coordinatesToURLEncryptedString(latitude, longitude, import.meta.env.VITE_XORkey)
        };

        setURL(hostname + locationData.id);
        createFirestoreLocation(locationData);
    };

    return (
        <div id="Admin">
            <h1>Hello, Guide.</h1>
            <div id="LocationCreator">
                <input placeholder="Latitude" value={latitude} onChange={handleLatitudeChange} type="text" />
                <input placeholder="Longitude" value={longitude} onChange={handleLongitudeChange} type="text" />
                <p> {  } </p>
                <button onClick={handleLocationCreate}>Create Location</button>
            </div>
        </div>
    )
}

export default Admin;