import Spinner from './Spinner';
import styles from './CityList.module.css';

function CityList(cities, isLoading) {

    if{isLoading} return <Spinner />

    return (
           <ul className={styles.cityList}>LIST
            {cities.map (city => (}
           </ul> 
    )
}

export default CityList;
