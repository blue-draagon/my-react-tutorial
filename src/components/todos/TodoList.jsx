import {TodoListItem} from "./TodoListItem.jsx";
/**
 *
 * @param {[{name: string, checked: boolean}]} visible
 * @param {({name: string, checked: boolean}) => void} toggleCheck
 * @param {({name: string, checked: boolean}) => void} remove
 */
export function TodoList ({visible, toggleCheck, remove}) {
    return (
        <div>
            <ul className="list-unstyled list vstack gap-2">
                {visible.map(todo => (
                    <TodoListItem key={todo.name}
                        todo={todo}
                        toggleCheck={toggleCheck}
                        remove={remove}
                    />
                ))}
            </ul>
        </div>
    )
}