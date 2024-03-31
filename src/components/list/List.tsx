import { Todo } from "../../types/types"
import TaskBox from "../../ui-kit/taskbox"
import './styles.css'
import { useTodos } from "../../utility/context/TodosContext"
interface ChildProps {
    todos: Todo[]
}

const List: React.FC<ChildProps> = ({todos}) => {
    const { deleteTodo, addDescription, markAsCompleted } = useTodos()
    return (        
        <ul className="list">
            
            {todos?.map((todo) => (
                
                <TaskBox
                 key={todo?.id}
                 id={todo?.id}
                 todo={todo}
                 handleDelete={deleteTodo} 
                 addDescription={addDescription}
                 markAsCompleted={markAsCompleted}/>
            ))}
        </ul>
    
    )
}

export default List