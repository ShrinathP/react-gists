import { addTodo, updateTodo, deleteTodo } from "../api/todosApi";

// mutate method receives 2 parameters function and options

export const addMutation = async (newTodo, todos) => {
    const added = await addTodo(newTodo)
    return [...todos, added].sort((a,b) => b.id - a.id)
}

export const addTodoOptions = (newTodo, todos) => {
    return {
        // we are optimistically saying newTodo will be accepted at the server
        // so not waiting for added variable
        optimisticData: [...todos, newTodo].sort((a,b) => b.id - a.id),
        rollbackOnError: true,
        populateCache: true,
        revalidate: false
    }
}