import {useCallback, useState} from "react";

/**
 *
 * @param {number} initial
 * @param {number} step
 * @param {number} min
 * @param {number} max
 */
export function useIncrement({initial = 0, step = 1, min = -Infinity, max = Infinity}) {
    const [count, setCount] = useState(initial)
    const increment = useCallback(() => {
        setCount(value => value > max ? value :  value + step)
    }, [max])
    const decrement = useCallback(() => {
        setCount(value => value < min ? value :  value - step)
    }, [min])
    const reset = useCallback(() => {
        setCount(initial)
    }, [])
    return {count, increment, decrement, reset}
}