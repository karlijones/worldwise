import { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";

export function convertToEmoji(countryCode) {
    const codePoints = countryCode 
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());

    return String.fromCodePoint(...codePoints);
}

function Form() {
    const navigate = useNavigate();

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
            {/* Additional form fields for cityName, country, and date can be added here */ }
            
        </div>
        <div>
            <Button className={styles.btn}
             type="primary">Add</Button>
            <Button type="back" 
            onClick={(e) =>
            {e.preventDefault()}
            navigate(-1)}>&larr; 
            Back</Button> 
        </div>
    );
   

export default Form;
