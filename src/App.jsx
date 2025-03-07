import {useReducer} from "react";

function todoReducer(state, action) {
    switch (action.type) {
        case "remove_todo": {
            return {
                ...state,
                todos : state.todos.filter(todo => todo !== action.item)
            }
        }
        case "toggle_todo": {
            return {
                ...state,
                todos : state.todos.map(todo => todo === action.item ? {...todo, checked: !todo.checked} : todo)
            }
        }
        case "remove_completed": {
            return {
                ...state,
                todos : state.todos.filter(todo => !todo.checked)
            }
        }
        case "toggle_completed": {
            return {
                ...state,
                showCompleted: !state.showCompleted
            }
        }
    }
    throw new Error("Unrecognized action type");
}

const TODOS = [
    {name: "Create todo app", checked: false},
    {name: "Create service app", checked: false},
    {name: "Create mj app", checked: false},
    {name: "Create ay app", checked: false},
]

function App() {
    console.log("App render")
    const [state, dispatch] = useReducer(todoReducer, {showCompleted: true, todos: TODOS})

    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(todo => !todo.checked)

    return (
        <div className="container my-3">
            <button onClick={() => dispatch({type: "toggle_completed"})}>
                {state.showCompleted ? "Hide Completed" : "Show Completed" }
            </button>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.name} >
                        <input type="checkbox" checked={todo.checked} onChange={() => dispatch({type: "toggle_todo", item: todo})}/>
                        {todo.name}
                        <button onClick={() => dispatch({type: "remove_todo", item: todo})}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({type: "remove_completed"})}>Clear completed</button>
        </div>
    )
}

export default App
