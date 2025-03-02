import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p>Counter : {count}</p>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default App
