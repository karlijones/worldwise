import { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";
import BackButton from "./BackButton";

export function convertToEmoji(countryCode) {
    const codePoints = countryCode 
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());

    return String.fromCodePoint(...codePoints);
}

function Form() {

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(newDate());
    const [notes, setNotes] = useState("");
}
    return (
        <form className={styles.form}>
        <div classname={styles.row} >
            <label htmlFor="notes">Notes about your trip to {City}
            </label>

            <textarea id="notes"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            />
            
        </div>
        <div className={styles.buttons}> 
            <Button type="primary">Add</Button>
            <BackButton />
        </div>
        </form>
    );
}
   

export default Form;
