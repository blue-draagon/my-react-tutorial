/**
 *
 * @param {{name: string, checked: boolean}} todo
 * @param {({name: string, checked: boolean}) => void} toggleCheck
 * @param {({name: string, checked: boolean}) => void} remove
 */
export function TodoListItem({todo, toggleCheck, remove}) {
    return (
        <li className="list-item text-center border-top pt-3">
            <input type="checkbox" className="mt-2 form-check-inline float-start"
                   checked={todo.checked}
                   onChange={() => toggleCheck(todo)}
            />
            <div className="d-inline-block mx-auto">
                {todo.name}
            </div>
            <button className="btn btn-danger float-end"
                    onClick={() => remove(todo)}
            >
                Delete
            </button>
        </li>
    )
}