function City() {
    const currentCity = {
        cityName: 'Paris',
        emoji: '🇫🇷',
        date: '2023-06-01',
        notes: 'Visited the Eiffel Tower and Louvre Museum.'
    };
    
    
    return (
        <div>
           <h6>City name</h6> 
           <h3>
            <span>{emoji}</span> {cityName}
           </h3>
        </div>
    )
}

export default City
