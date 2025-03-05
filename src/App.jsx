import {useFetch} from "./hooks/useFetch.js";
import {Input} from "./components/forms/Input.jsx";
import {memo, useCallback, useMemo, useState} from "react";
import {createPortal} from "react-dom";


function App() {
    console.log("App render")

    const style = {
        height: 200,
        overflowY: "scroll",
        background: "#eee",
        position: "relative",
    }

    return (
        <div className="container my-3 vstack gap-3">
            <div style={style}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem earum enim eos et facilis impedit ipsam iusto laborum molestiae nostrum porro possimus praesentium quae repellat sint sit, soluta unde.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem earum enim eos et facilis impedit ipsam iusto laborum molestiae nostrum porro possimus praesentium quae repellat sint sit, soluta unde.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem earum enim eos et facilis impedit ipsam iusto laborum molestiae nostrum porro possimus praesentium quae repellat sint sit, soluta unde.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem earum enim eos et facilis impedit ipsam iusto laborum molestiae nostrum porro possimus praesentium quae repellat sint sit, soluta unde.
                </p>

                <BodyModal />
            </div>
        </div>
    )
}

function BodyModal () {
    return createPortal(<Modal />, document.body)
}

function Modal() {
    const style = {
        position: "absolute",
        top: 0,
        right: 0,
        padding: 10,
        border: "1px solid grey",
        background: "white",
    }
    return (
        <div style={style}>
            I am a Modal
        </div>
    )
}


export default App
