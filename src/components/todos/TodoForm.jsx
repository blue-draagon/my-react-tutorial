import {useTodoDispatch} from "./todosContext.jsx";

export function TodoForm() {
    console.log("TodoForm render")
    const dispatch = useTodoDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.trim() !== "") {
            dispatch({type: "add_todo", item : {name: name, checked: false}})
            e.target.name.value = '';
        }
    }

    return (
        <div className="my-4">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="d-inline-block w-50">
                    <input
                        className="form-control"
                        placeholder="Add new todo ..."
                        name="name"
                    />
                </div>
                <button type="submit" className="mx-4 btn btn-primary">
                    Add task
                </button>
            </form>
        </div>
    )
}