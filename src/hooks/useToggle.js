import {useState} from "react";

/**
 *
 * @param {boolean} initial
 */
export function useToggle(initial = false) {
    const [state, setState] = useState(initial)
    const toggle = () => setState(prevState => !prevState)
    return [state, toggle]
}