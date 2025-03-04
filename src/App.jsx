import {use, useEffect, useMemo, useRef, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

function App() {

    const ref = useRef(null);

    useEffect(() => {
        console.log(ref.current.offsetHeight);
    }, []);

    return (
        <div ref={ref}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis dolores exercitationem obcaecati quia saepe. Ad, animi commodi ducimus ea iure mollitia natus officia omnis voluptas voluptatibus. Cupiditate, dolorum, laborum!
        </div>
    )
}


export default App
