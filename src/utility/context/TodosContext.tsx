import { createContext, useContext, useState } from 'react';
import { Todo, TodoId } from '../../types/types';
import { ReactNode } from 'react';
type TodosContextType = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    addTodo: (todo: Todo) => void,
    deleteTodo: (id: string | TodoId) => void,
    addDescription: (id: string | TodoId, description: string) => void,
    markAsCompleted: (id: string | TodoId) => void,
    filterSelected: Todo[],
    filters: any,
    setFilterSelected: React.Dispatch<React.SetStateAction<Todo[]>>,
    isSorted: boolean,
    setIsSorted: React.Dispatch<React.SetStateAction<boolean>>
}
export const TodosContext = createContext<TodosContextType>({} as TodosContextType)
export const useTodos = () => useContext(TodosContext)

type ChildrenProp = {
    children: ReactNode
}

export const TodosProvider = ({ children }: ChildrenProp) => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState<Todo[]>(savedTodos);
    const [isSorted, setIsSorted] = useState<boolean>(false)
    const [filters] = useState({
        all: todos.map((todo) => todo),
        pending: todos.filter((todo) => !todo.completed),
        completed: todos.filter((todo) => todo.completed)
    })

    const [filterSelected, setFilterSelected] = useState(filters?.all)

    //add a new todo and update the localStorage
    const addTodo = (todo: Todo) => {
        setTodos([todo, ...todos])
        setFilterSelected([todo, ...todos])
        localStorage.setItem('todos', JSON.stringify([todo, ...todos]))
    }

    //delete a todo and update the localStorage
    const deleteTodo = (id: string | TodoId) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
        setFilterSelected(filteredTodos)
        localStorage.setItem('todos', JSON.stringify(filteredTodos))
    }

    //add a description and update the localStorage
    const addDescription = (id: string | TodoId, description: string) => {
        const todoToUpdate = todos.find((todo) => todo.id === id)
        if (todoToUpdate) {
            todoToUpdate.description = description
            setTodos([...todos])
            localStorage.setItem('todos', JSON.stringify([...todos]))
        }
    }

    //mark a todo as completed and update the localStorage

    const markAsCompleted = (id: string | TodoId) => {
        const todoToUpdate = todos.find((todo) => todo.id === id)
        if (todoToUpdate) {
            todoToUpdate.completed = !todoToUpdate.completed
            setTodos([...todos])
            localStorage.setItem('todos', JSON.stringify([...todos]))
        }
    }
    const value = {
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        addDescription,
        markAsCompleted,
        filterSelected,
        setFilterSelected,
        isSorted,
        setIsSorted,
        filters
    }
    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    )
}
