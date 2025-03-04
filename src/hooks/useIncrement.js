import {useState} from "react";

/**
 *
 * @param {number} initial
 * @param {number} step
 * @param {number} min
 * @param {number} max
 */
export function useIncrement({initial = 0, step = 1, min = -Infinity, max = Infinity}) {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(value => value > max ? value :  value + step)
    }
    const decrement = () => {
        setCount(value => value < min ? value :  value - step)
    }
    const reset = () => {
        setCount(initial)
    }
    return {count, increment, decrement, reset}
}