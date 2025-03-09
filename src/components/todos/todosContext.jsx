import {createContext, useContext, useReducer} from "react";


const TodosContext = createContext({
    all: [],
    showCompleted: false,
    searchPattern: ""
})
const TodoActionsContext = createContext(() => {})

export function TodosProvider({children}) {
    const [todos, dispatch] = useReducer(todoReducer, TODOS)
    return (
        <TodosContext.Provider value={todos}>
            <TodoActionsContext.Provider value={dispatch}>
                {children}
            </TodoActionsContext.Provider>
        </TodosContext.Provider>
    )
}

export function useTodos() {
    return useContext(TodosContext)
}

export function useTodoDispatch() {
    return useContext(TodoActionsContext)
}

/**
 *
 * @param {{all: [{name: string, checked: boolean}], showCompleted: boolean, searchPattern: string}} state
 * @param {{type: string, item?: {name: string, checked: boolean}, pattern?: string}} action
 * @returns {{all: [{name: string, checked: boolean}], showCompleted: boolean, searchPattern: string}}
 */
function todoReducer(state, action) {
    switch (action.type) {
        case "remove_todo": {
            return {
                ...state,
                all: state.all.filter(todo => todo !== action.item)
            }
        }
        case "toggle_todo": {
            return {
                ...state,
                all: state.all.map(todo => todo === action.item ? {...todo, checked: !todo.checked} : todo)
            }
        }
        case "add_todo": {
            return {
                ...state,
                all: [...state.all, action.item]
            }
        }
        case "remove_completed": {
            return {
                ...state,
                all: state.all.filter(todo => !todo.checked)
            }
        }
        case "toggle_completed": {
            return {
                ...state,
                showCompleted: !state.showCompleted
            }
        }
        case "toggle_search": {
            return {
                ...state,
                searchPattern: action.pattern
            }
        }
    }
    throw new Error("Unrecognized action type");
}

const TODOS = {
    all: [
        {name: "do the prayer", checked: false},
        {name: "clean the room", checked: false},
        {name: "read the quran", checked: false},
        {name: "go to work", checked: false},
    ],
    showCompleted: false,
    searchPattern: ""
}