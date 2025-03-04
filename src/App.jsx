import {use, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

function App() {
    console.log("App render");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const security = passwordSecurity(password)

    return (
        <div className="container my-3 vstack gap-2">
            <Input
                id="Username"
                label="Username"
                placeholder="Username"
                value={username}
                onChange={setUsername}
            />
            <Input
                id="Password"
                label="Password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
            />
            Security : {security}
        </div>
    )
}

/**
 *
 * @param {string} password
 * @returns {string}
 */
function passwordSecurity(password) {
    const startTime = performance.now()
    while (performance.now() - startTime < 200) {}

    if (password.length <= 3) {
        return "Low"
    }
    if (password.length <= 6) {
        return "Middle"
    }

    return "Good";
}


export default App
