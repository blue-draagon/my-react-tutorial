import {TodosProvider} from "./components/todos/todosContext.jsx";
import {TodosHeader} from "./components/todos/TodosHeader.jsx";
import {TodoList} from "./components/todos/TodoList.jsx";
import {TodoForm} from "./components/todos/TodoForm.jsx";

function App() {
    console.log("App render")

    return (
        <TodosProvider>
            <div className="container my-3">
                <TodosHeader />
                <TodoForm />
                <TodoList />
            </div>
        </TodosProvider>
    )
}

export default App
