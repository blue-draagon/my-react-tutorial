import {useState} from "react";

function App() {
    // hook must not be on if or loop
    const [count, setCount] = useState(0)
    const [person, setPerson] = useState({
        firstname: "John",
        lastname: "Doe",
        age: 25,
    })
    const increment = () => {
        setPerson({...person, age: person.age + 1});
    }
    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <>
            <p>Counter : {count}</p>
            <p>Age : {person.age}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={increment}>Gagner une année</button>
        </>
    )
}

export default App
