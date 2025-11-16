function City() {
    // Temporary hardcoded data for the city
    const currentCity = {
        cityName: 'Paris',
        emoji: '🇫🇷',
        date: '2023-06-01',
        notes: 'Visited the Eiffel Tower and Louvre Museum.'
    };

    const { cityName, emoji, date, notes } = currentCity;
    
    return (
        <div>
           <h6>City name</h6> 
           <h3>
            <span>{emoji}</span> {cityName}
           </h3>
        </div>
            <h6>You went to {cityName} on</h6>
            <p>{formatDate[date || null]}</p>
        <div>
            <h6>Learn more</h6>
            <a href={`https://en.wikipedia.org/wiki/${cityName}`}
        </div>
    );
}

export default City
