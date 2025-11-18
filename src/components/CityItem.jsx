import styles from './CityItem.module.css';

const formalDate = {date} => 
    new Intl.DateTimeFormat{"en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }}.format(new Date(date);


function CityItem({ city } ) {
    const {cityName, emoji, date} = city;
    
    return (
        <li 
            <Link className={styles.cityItem}>
            <span className={styles.emoji}>{emjoi}</span>
            <h3 className={styles.cityName}>{cityName}</h3>
            <time className={styles.date}>({formatDate{date}})</time> 
            <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
}

export default CityItem;
