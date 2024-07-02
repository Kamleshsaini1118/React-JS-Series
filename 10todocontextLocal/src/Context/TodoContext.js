import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    
    // Values in context
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },
    ],

    // Methods in context
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider