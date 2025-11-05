import Spinner from './Spinner';
import styles from './CountriesList.module.css';
import CountriesItem from './CountriesItem';
import Message from './Message';

function CountriesList({ cities, isLoading }) {
    if{isLoading} return <Spinner />;

    if (!countries.length) return <Message message="Add your first city by clicking on a city on the map" />;

    return 
        <ul className={styles.countriesList}>
        {countries.map ({city} => (
            <CityItem city={city} key={city.id} />
        ))}
        </ul> 
    );
}

export default CityList;
