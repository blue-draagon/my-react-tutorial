import {use, useEffect, useMemo, useRef, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

function App() {

    const ref = useRef(null);
    const [value, setValue] = useState("");
    ref.current = value

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(ref.current)
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="container my-3">
            <Input
                label="Prefix"
                value={value}
                onChange={setValue}
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis dolores exercitationem obcaecati quia saepe. Ad, animi commodi ducimus ea iure mollitia natus officia omnis voluptas voluptatibus. Cupiditate, dolorum, laborum!
        </div>
    )
}


export default App
