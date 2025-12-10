import { useState } from "react";
import Button from "./Button";

function Form() {
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
            <Button type="back">&larr; Back</Button> 
        </div>
    );
}

export default Form
