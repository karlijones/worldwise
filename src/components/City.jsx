import { useParams, useSearchParams } from "react-router";
import styles from "./City.module.css";

const formatDate = (date =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date))
);

function City() {
    // Temporary hardcoded data for the city
    const currentCity = {
        const { id } = useParams();
        const {getCity, currentCity} = useCities();
        
       

        //TEMP DATA
        const currentCity = {
            cityName: "Lisbon",
            emoji: "🇵🇹",
            date: "2024-06-01",
            notes: "My favorite city so far!",
    };


    const { cityName, emoji, date, notes } = currentCity;

    return (
    <>
    <h1>City {id}</h1>
    <p>Position: {lng}, {lat}</p>;
    </>
    );
    
    
    // return (
    //     <div className={styles.city}>
    //         <div className={styles.row}>
    //             <h6>City name</h6> 
    //             <h3>
    //                 <span>{emoji}</span> {cityName}
    //             </h3>
    //         </div>

    //         <div className={styles.row}>
    //             <h6>You went to {cityName} on</h6>
    //             <p>{formatDate[date || null]}</p>
    //         <div className={styles.row}>
    //             <h6>Learn more</h6>
    //             <a href={`https://en.wikipedia.org/wiki/${cityName}`}
    //             target="_blank"
    //             rel="noreferrer"
    //             >
    //             Check out {cityName} on Wikipedia &rarr;
    //             </a>
    //         </div>

    //         <div></div>
    //         </div>
    //     </div>
    // );
}

export default City
