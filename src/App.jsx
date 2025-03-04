import {use, useEffect, useMemo, useRef, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

function App() {

    const ref = useRef(null);
    const [value, setValue] = useState("");

    // ref is a special prop to use it simple change
    // prop name on component
    // or use forwardRef
    // set default value to null for ref
    // to avoid unwanted change

    return (
        <div className="container my-3">
            <Input
                label="Prefix"
                value={value}
                onChange={setValue}
            />
        </div>
    )
}


export default App
