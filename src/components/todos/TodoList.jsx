import {TodoListItem} from "./TodoListItem.jsx";
import {useTodos} from "./todosContext.jsx";
export function TodoList () {
    console.log("TodoList render")
    const todos = useTodos()
    const visible = todos.all.filter((todo) => {
        let keep = todos.showCompleted ? true : !todo.checked
        if (todos.searchPattern !== "") {
            keep = todo.name.includes(todos.searchPattern)
        }
        return keep
    })
    return (
        <div>
            <ul className="list-unstyled list vstack gap-2">
                {visible.map(todo => (
                    <TodoListItem key={todo.name}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}