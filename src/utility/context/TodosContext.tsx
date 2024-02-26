import { createContext, useContext, useState } from 'react';
import { Todo, TodoId } from '../../types/types';
import { ReactNode } from 'react';
type TodosContextType = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    addTodo: (todo: Todo) => void,
    deleteTodo: (id: string | TodoId) => void,
    addDescription: (id: string | TodoId, description: string) => void
}
export const TodosContext = createContext<TodosContextType>({} as TodosContextType)
export const useTodos = () => useContext(TodosContext)

type ChildrenProp = {
    children: ReactNode
}

export const TodosProvider = ({ children }: ChildrenProp) => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState<Todo[]>(savedTodos);

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo])
        localStorage.setItem('todos', JSON.stringify([...todos, todo]))
    }

    const deleteTodo = (id: string | TodoId) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
        localStorage.setItem('todos', JSON.stringify(filteredTodos))
    }
    const addDescription = (id: string | TodoId, description: string) => {
        const todoToUpdate = todos.find((todo) => todo.id === id)
        if (todoToUpdate) {
            todoToUpdate.description = description
            setTodos([...todos])
            localStorage.setItem('todos', JSON.stringify([...todos]))
        }
    }
    const value = {
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        addDescription
    }
    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    )   }
