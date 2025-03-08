import {Input} from "../forms/Input.jsx";

export function TodosHeader({showCompleted, clear, toggleVisible, search, setSearch}) {

    return (
        <div className="my-2">
            <button onClick={toggleVisible} className="btn btn-secondary mx-3">
                {showCompleted ? "Hide Completed" : "Show Completed"}
            </button>
            <button onClick={clear} className="btn btn-danger mx-3">
                Clear completed
            </button>
            <div className="d-inline-block">
                <Input
                    placeholder="Search..."
                    value={search}
                    onChange={setSearch}
                />
            </div>
        </div>
    )
}