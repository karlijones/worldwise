import { set } from "lodash";

function Form() {
    return (
        <div classname={styles.row} >
            <label htmlFor="notes">Notes about your trip to {City}
            </label>
            <textarea id="notes"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            >
            </textarea>
        </div>
    )
}

export default Form
