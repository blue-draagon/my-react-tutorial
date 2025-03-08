import {useCallback, useReducer, useState} from "react";

function todoReducer(state, action) {
    switch (action.type) {
        case "remove_todo": {
            return {
                ...state,
                todos : state.todos.filter(todo => todo !== action.item)
            }
        }
        case "toggle_todo": {
            return {
                ...state,
                todos : state.todos.map(todo => todo === action.item ? {...todo, checked: !todo.checked} : todo)
            }
        }
        case "add_todo": {
            return {
                ...state,
                todos : [...state.todos, action.item]
            }
        }
        case "remove_completed": {
            return {
                ...state,
                todos : state.todos.filter(todo => !todo.checked)
            }
        }
        case "toggle_completed": {
            return {
                ...state,
                showCompleted: !state.showCompleted
            }
        }
    }
    throw new Error("Unrecognized action type");
}

export function useTodos(todos = []) {
    const [state, dispatch] = useReducer(todoReducer, {showCompleted: true, todos: todos})
    const [search, setSearch] = useState('')

    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(todo => !todo.checked)
    const displayTodos = search !== '' ?
        visibleTodos.filter(todo => todo.name.toLowerCase().includes(search.toLowerCase())) :
        visibleTodos

    return {
        visible: displayTodos,
        remove: useCallback((todo) => dispatch({type: "remove_todo", item: todo}), []),
        toggleCheck: useCallback((todo) => dispatch({type: "toggle_todo", item: todo}), []),
        addTask: useCallback((todo) => dispatch({type: "add_todo", item: todo}), []),
        clear: useCallback(() => dispatch({type: "remove_completed"}), []),
        toggleVisible: useCallback(() => dispatch({type: "toggle_completed"}), []),
        search: search,
        setSearch: setSearch,
        showCompleted: state.showCompleted,
    }
}