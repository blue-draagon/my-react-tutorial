import {useTodoDispatch, useTodos} from "./todosContext.jsx";
import {useState} from "react";

export function TodosHeader() {
    return (
        <div className="my-2">
            <TodoHeaderCompleted />
            <TodoHeaderSearch/>
        </div>
    )
}

function TodoHeaderCompleted() {
    console.log("TodoHeaderCompleted render")
    const dispatch = useTodoDispatch()
    const {showCompleted, all} = useTodos()
    let hasCompleted = false;
    all.some((todo) => {
        if (todo.checked) {
            hasCompleted = true;
            return true;
        }
        return false;
    })
    const toggleVisible = () => {
        if (hasCompleted) {
            dispatch({type: "toggle_completed"})
        }
    }
    const clearCompleted = () => {
        if (hasCompleted) {
            dispatch({type: "remove_completed"})
        }
    }
    return (
        <>
            <button onClick={toggleVisible} className="btn btn-secondary me-4 w-25">
                {showCompleted ? "Hide Completed" : "Show Completed"}
            </button>
            <button onClick={clearCompleted} className="btn btn-danger me-4">
                Clear completed
            </button>
        </>
    )
}

function TodoHeaderSearch() {
    console.log("TodoHeaderSearch render")
    const dispatch = useTodoDispatch()
    const [search, setSearch] = useState('')
    const toggleSearch = (e) => {
        dispatch({type: "toggle_search", pattern: e.target.value})
        setSearch(e.target.value)
    }
    return (
        <div className="d-inline-block">
            <input
                className="form-control"
                placeholder="Search..."
                value={search}
                onChange={toggleSearch}
            />
        </div>
    )
}