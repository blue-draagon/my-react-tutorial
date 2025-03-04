import {useToggle} from "./hooks/useToggle.js";
import {useIncrement} from "./hooks/useIncrement.js";


function App() {
     const [checked, toggleCheck] = useToggle();
     const {count, increment, decrement} = useIncrement({});

    return (
        <div className="container my-3">
            <div className="vstack gap-3">
                <div>
                    <input type="checkbox" checked={checked} onChange={toggleCheck} />
                    {checked && "Checked"}
                </div>
                <div>
                    Counter : {count}
                    <button onClick={increment}>
                        Increment
                    </button>
                    <button onClick={decrement}>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}


export default App
