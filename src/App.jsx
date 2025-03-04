import {use, useMemo, useRef, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

function App() {

    const ref = useRef(null);

    console.log(ref);

    return (
        <div onClick={() => ref.current = 'Clicked'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis dolores exercitationem obcaecati quia saepe. Ad, animi commodi ducimus ea iure mollitia natus officia omnis voluptas voluptatibus. Cupiditate, dolorum, laborum!
        </div>
    )
}


export default App
