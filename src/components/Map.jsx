import { useNavigate, useSearchParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../context/CitiesContext";

function Map() {
    const navigate = useNavigate();
    const { cities } = useCities();


    const [mapPosition, setMapPosition] = useState([40, 0]);

    const [searchParams, setSearchParams] = useSearchParams();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer}
            <MapContainer 
            center={mapPosition} 
            zoom={13} 
            scrollWheelZoom={true} 
            style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (<Marker position={[city.lat, city.lng]} key={city.id} eventHandlers={{>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>)}
            </MapContainer>
        </div>
    );
}

export default Map
