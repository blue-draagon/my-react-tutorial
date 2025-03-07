import {useCallback, useReducer} from "react";

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
    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(todo => !todo.checked)

    return {
        visible: visibleTodos,
        remove: useCallback((todo) => dispatch({type: "remove_todo", item: todo}), []),
        toggleCheck: useCallback((todo) => dispatch({type: "toggle_todo", item: todo}), []),
        clear: useCallback(() => dispatch({type: "remove_completed"}), []),
        toggleVisible: useCallback(() => dispatch({type: "toggle_completed"}), []),
        showCompleted: state.showCompleted,
    }
}