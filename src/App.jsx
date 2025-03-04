import {useEffect, useState} from "react";
import {Input} from "./components/forms/Input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";

function App() {
    const [showInput, setShowInput] = useState(true);


    return (
        <div className="container my-3">
            <div className="mb-3">
                <Checkbox
                    id="checkbox"
                    label="Show title input"
                    checked={showInput}
                    onChange={setShowInput}
                />
            </div>
            {showInput && (<EditTitle/>)}

            <div style={{height: '300vh'}}></div>
        </div>
    )
}

function EditTitle() {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [y, setY] = useState(0)

    // a setter on first level of useEffect is not
    // a good practice

    // set original title
    useEffect(() => {
        const baseTitle = document.title
        return () => {
            document.title = baseTitle
        }
    }, []);

    useEffect(() => {
        console.log("title")
        document.title = title
    }, [title])

    useEffect(() => {
        console.log("mounted")
    }, [])

    // gestion de l'effet de bord
    useEffect(() => {
        const handler = (e) => {
            console.log('scroll')
            setY(window.scrollY)
        }
        window.addEventListener('scroll', handler)

        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [])

    return (<div className="vstack gap-2">
        <Input
            placeholder="Update the title"
            value={title}
            onChange={setTitle}
        />
        <Input
            placeholder="Name"
            value={name}
            onChange={setName}
        />
        Scroll : {y}
    </div>)
}


export default App
