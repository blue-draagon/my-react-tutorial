import {useEffect, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

// useEffect is use for event out of the component
// itself (interval, timeout, ...)
// general event
// do not forgot to clen even

function App() {
    console.log("App render");
    const [duration, setDuration] = useState(5)
    const [timeLeft, setTimeLeft] = useState(duration)

    const handleChange = (value) => {
        setDuration(value)
        setTimeLeft(value)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((value) => {
                if (value < 1) {
                    clearInterval(timer)
                    return 0
                }
                return value - 1
            })
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [duration]);

    return (
        <div className="container my-3">
            <Input
                placeholder="Demarrer un timer"
                value={duration}
                onChange={handleChange}
            />
            Timer : {timeLeft}
        </div>
    )
}


export default App
