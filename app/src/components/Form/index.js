import { useState } from "react";

export default function Form({ onSubmit, onCancel, inputs }) {
    const [formValues, setFormValues] = useState({});
    return <form onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input) => (
            <div key={input.id} className="input-group">
                <label htmlFor={input.id}>{input.title}</label>
                <input
                    type={input.type}
                    id={input.id}
                    name={input.title}
                    value={formValues[input.id]}
                    onChange={(e) =>
                        setFormValues({ ...formValues, [input.id]: e.target.value })
                    }
                />
            </div>
        ))}
        <div className="button-group">
            <button type="submit" onClick={() => onSubmit(formValues)}>
                Submit
            </button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </div>
    </form>
}
