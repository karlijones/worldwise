import styles from './CityItem.module.css';

function CityItem({ city } ) {
    const {cityName, emoji, date} = city;
    
    return (
        <li className={styles.cityItem}
        <span className={styles.emoji}>{emjoi}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        </li>
    );
}

export default CityItem
