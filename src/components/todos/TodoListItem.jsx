import {useTodoDispatch} from "./todosContext.jsx";

/**
 *
 * @param {{name: string, checked: boolean}} todo
 */
export function TodoListItem({todo}) {
    console.log("TodoListItem render")
    const dispatch = useTodoDispatch()
    const toggleCheck = () => {
        dispatch({type: "toggle_todo", item : todo})
    }
    const remove = () => {
        dispatch({type: "toggle_todo", item : todo})
    }
    return (
        <li className="list-item text-center border-top pt-3">
            <input type="checkbox"
                   className="mt-2 form-check-inline float-start"
                   checked={todo.checked}
                   onChange={toggleCheck}
            />
            <div className="d-inline-block mx-auto">
                {todo.name}
            </div>
            <button className="btn btn-danger float-end" onClick={remove}>
                Delete
            </button>
        </li>
    )
}