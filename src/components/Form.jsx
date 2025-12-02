import { set } from "lodash";

function Form() {
    return (
        <div>
            <label></label>
            <textarea id="notes"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            >
            </textarea>
        </div>
    )
}

export default Form
