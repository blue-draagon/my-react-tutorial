import {useFetch} from "./hooks/useFetch.js";
import {Input} from "./components/forms/Input.jsx";
import {memo, useState} from "react";


function App() {
    console.log("App render")
    const [name, setName] = useState('')

    return (
        <div className="container my-3 vstack gap-3">
            <Input
                label="Name"
                placeholder="Name"
                value={name}
                onChange={setName}
            />
            Name: {name}

            <Info />
        </div>
    )
}

// default rendering
// a component is render when state change
// or when parent is render

const Info = memo(function InfoMemo() {
    console.log("Info render")
    waitSync(500)
    return (
        <div className="alert alert-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur culpa cum ducimus eaque, earum esse et ex minima molestiae nostrum numquam perspiciatis possimus, quae recusandae repudiandae soluta sunt voluptate.
        </div>
    )
})

function waitSync(duration) {
    const startTime = performance.now()
    while (performance.now() - startTime < duration) {}
}


export default App
