import { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";

function Form() {
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    
    
    return (
        <div classname={styles.row} >
            <label htmlFor="notes">Notes about your trip to {City}
            </label>

            <textarea id="notes"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            />
            
        </div>
        <div>
            <Button className={styles.btn} >
            <Button type="primary">Add</Button>
            <Button type="back" onClick={}>&larr; Back</Button> 
        </div>
    );
}

export default Form
