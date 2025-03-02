import {useState} from "react";

function App() {
    const [name, setName] = useState("Dragon")

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <form>
                <input type="text" name="name" value={name} onChange={handleChange} />
                {name}
            </form>
        </>
    )
}

export default App
