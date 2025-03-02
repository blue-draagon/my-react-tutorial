import {useState} from "react";

function App() {
    console.log("render")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(new FormData(e.target));
    }

    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const [area, setArea] = useState('')
    const handleAreaChange = (e) => {
        setArea(e.target.value)
    }

    const [check, setCheck] = useState(false)
    const toggleCheck = (e) => {
        setCheck(!check)
    }

    // uncontrolled input is better for input that
    // is needed only on submit
    // on controlled input value must not be undefined

    // text area and other form work like simple input
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    Uncontrolled input
                    <input type="text" name="name" defaultValue="Valeur par defaut" />
                </p>
                <p>
                    Controlled input
                    <input type="text" name="value" value={value} onChange={handleChange} />
                </p>
                <p>
                    Textarea input
                    <textarea name="value" value={area} onChange={handleAreaChange} />
                </p>
                <p>
                    Check input
                    <input type="checkbox" name="value" checked={check} onChange={toggleCheck} />
                </p>
                <button disabled={!check}>Envoyer</button>
            </form>
        </>
    )
}

export default App
