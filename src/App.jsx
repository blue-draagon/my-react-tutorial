import {useState} from "react";

function App() {
    const [name, setName] = useState("Dragon")

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const reset = () => {
        setName("")
    }

    // controlled input is better for input
    // that we want reaction for every change
    return (
        <>
            <form>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                {name}
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </>
    )
}

export default App
