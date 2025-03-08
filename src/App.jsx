import {useTodos} from "./hooks/useTodos.js";
import {TodosHeader} from "./components/todos/TodosHeader.jsx";
import {TodoList} from "./components/todos/TodoList.jsx";
import {TodoForm} from "./components/todos/TodoForm.jsx";

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
            <TodosHeader
                showCompleted={todos.showCompleted}
                clear={todos.clear}
                toggleVisible={todos.toggleVisible}
                search={todos.search}
                setSearch={todos.setSearch}
            />
            <TodoForm addTask={todos.addTask} />
            <TodoList
                visible={todos.visible}
                toggleCheck={todos.toggleCheck}
                remove={todos.remove}
            />
        </div>
    )
}

export default App
