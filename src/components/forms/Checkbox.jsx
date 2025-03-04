/**
 *
 * @param {string} id
 * @param {string} label
 * @param {boolean} checked
 * @param {(c: boolean) => null} onChange
 */
export function Checkbox({id, label, checked, onChange}) {
    const handleChange = (e) => {
        onChange(e.target.checked);
    }
    return (
        <div className="form-check">
            <label className="form-check-label" htmlFor={id}>
                <input type="checkbox"
                       id={id}
                       className="form-check-input"
                       checked={checked}
                       onChange={handleChange}
                />
                {label}
            </label>
        </div>
    )
}