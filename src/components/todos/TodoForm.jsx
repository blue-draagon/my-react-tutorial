import {Input} from "../forms/Input.jsx";

export function TodoForm({addTask}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({name: e.target.name.value, checked: false});
        e.target.name.value = '';
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