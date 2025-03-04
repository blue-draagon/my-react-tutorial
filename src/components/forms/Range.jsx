/**
 *
 * @param {number} min
 * @param {number} max
 * @param {string} maxPrice
 * @param {(s: string) => {}} onMaxPriceChange
 */
export function Range({min, max, maxPrice, onMaxPriceChange}) {
    const handleChange = (e) => {
        onMaxPriceChange(e.target.value)
    }
    return (
        <div>
            <input
                type="range"
                className="form-range"
                min={min}
                max={max}
                value={maxPrice}
                onChange={handleChange}
            />
        </div>
    )
}