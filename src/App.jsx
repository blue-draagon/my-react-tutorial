import {useTodos} from "./hooks/useTodos.js";

const TODOS = [
    {name: "Create todo app", checked: false},
    {name: "Create service app", checked: false},
    {name: "Create mj app", checked: false},
    {name: "Create ay app", checked: false},
]

function App() {
    console.log("App render")
    const todos = useTodos(TODOS);

    return (
        <div className="container my-3">
            <button onClick={todos.toggleVisible}>
                {todos.showCompleted ? "Hide Completed" : "Show Completed"}
            </button>
            <ul>
                {todos.visible.map(todo => (
                    <li key={todo.name}>
                        <input type="checkbox"
                               checked={todo.checked}
                               onChange={() => todos.toggleCheck(todo)}
                        />
                        {todo.name}
                        <button onClick={() => todos.remove(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={todos.clear}>Clear completed</button>
        </div>
    )
}

export default App
