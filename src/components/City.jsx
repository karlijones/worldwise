function City() {
    // Temporary hardcoded data for the city
    const currentCity = {
        cityName: 'Paris',
        emoji: '🇫🇷',
        date: '2023-06-01',
        notes: 'Visited the Eiffel Tower and Louvre Museum.'
    };

    const { cityName, emoji, date, notes } = currentCity;

    return <h1>City</h1>;
    
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
