import { useEffect, useState } from "react";
import './Styles/Admin.scss'
import createFirestoreLocation from "../Helpers/CreateLocation";
import { coordinatesToURLEncryptedString } from "../Helpers/CoordsEncrypt";
import QRCode from "react-qr-code";

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
        //createFirestoreLocation(locationData);
    };

    return (
        <div id="Admin">
            <header>
                <h1>Hello, Guide.</h1>
            </header>
            <div id="LocationCreator">
                { url &&
                    <div id="QRCode">
                        <QRCode
                            size={500}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={url}
                            viewBox={`0 0 500 500`}
                        />
                    </div>
                }
                <p> { url } </p>

                <input placeholder="Latitude" value={latitude} onChange={handleLatitudeChange} type="text" />
                <input placeholder="Longitude" value={longitude} onChange={handleLongitudeChange} type="text" />
                <button onClick={handleLocationCreate}>Create Location</button>
            </div>
        </div>
    )
}

export default Admin;