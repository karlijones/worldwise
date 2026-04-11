import { useNavigate, useSearchParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../context/CitiesContext";
import { map } from "lodash";

function Map() {
    const navigate = useNavigate();
    const { cities } = useCities();


    const [mapPosition, setMapPosition] = useState([40, 0]);

    const [searchParams, setSearchParams] = useSearchParams();

    const mapLat = searchParams.get("lat");
    const mapLng = searchParams.get("lng");

    return (
    <div className={styles.mapContainer}>
            //<MapContainer 
            center={[mapLat, mapLng]} 
            zoom={6} 
            scrollWheelZoom={true} 
            style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker position={[city.position.lat, city.position.lng]}
                    key={city.id}> 
                    <Popup>
                        <span>{city.emoji}</span><span>{city.cityName}</span>
                    </Popup>
                </Marker>))}
            </MapContainer>
        </div>
    );
}

export default Map
