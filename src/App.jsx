import {useToggle} from "./hooks/useToggle.js";
import {useIncrement} from "./hooks/useIncrement.js";
import {useState} from "react";
import {useDocumentTitle} from "./hooks/useDocumentTitle.js";
import {Input} from "./components/forms/Input.jsx";


function App() {
    const [name, setName] = useState("")
    useDocumentTitle(name)

    return (
        <div className="container my-3">
            <Input
                placeholder="Edit your name..."
                label="Name"
                value={name}
                onChange={setName}
            />
        </div>
    )
}


export default App
