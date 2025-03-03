import {useState} from "react";

function App() {
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    return (
        <form>
            <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
            <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
        </form>
    )
}

function CGUCheckbox({checked, onCheck}) {
    const handleChange = (e) => {
      onCheck(e.target.checked);
    }
    return (
        <div>
            <label htmlFor="check">
                <input id="check" type="checkbox" checked={checked} onChange={handleChange}/>
                Accept conditions
            </label>
        </div>
    )
}

export default App
