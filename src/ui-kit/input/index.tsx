import './index.css'
import { Todo } from '../../types/types'
import { useTodos } from '../../utility/context/TodosContext'
import { useState } from 'react'
interface ChildProps {
    title: string
}
const Input: React.FC<ChildProps> = ({title}) => {
    const { addTodo } = useTodos()
    const [todoName, setTodoName] = useState<string>('')
    const submit = (e: any) => {
        if (!todoName) return
        e.preventDefault();
        const todo: Todo = {
            id: crypto.randomUUID(),
            title: todoName,
            completed: false,
            description: '' 
        }
        addTodo(todo)
        setTodoName('')
    }

    return (
        <>
        <form className='form' onSubmit={(e) => submit(e)} >
        <input 
         autoFocus
         onChange={(e) => setTodoName(e.target.value)} 
         value={todoName} className='input_text' 
         type='text' 
         placeholder={title}
         />
        </form>
        </>
    )
}

export default Input