import {useId} from "react";

/**
 *
 * @param {string} label
 * @param {string} placeholder
 * @param {string | number} value
 * @param {(s: string) => {}} onChange
 */
export function Input({label, placeholder, value, onChange}) {
    const id = useId()

    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}