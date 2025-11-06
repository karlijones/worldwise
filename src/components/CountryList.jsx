import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CityItem from './CityItem';
import Message from './Message';

function CountryList({ cities, isLoading }) {
    if {isLoading} return <Spinner />;

    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />;

    const countries = [];
    
    return 
        <ul className={styles.countryList}>
        {countries.map ({city} => (
            <CityItem city={city} key={city.id} />
        ))}
        </ul> 
    );
}

export default CountryList;
