import { Todo } from "../../types/types"
import TaskBox from "../../ui-kit/taskbox"
import './styles.css'
interface ChildProps {
    todos: Todo[]
}

const List: React.FC<ChildProps> = ({todos}) => {
    return (
        
        <ul className="list">
            
            {todos.map((todo) => (
                
                <TaskBox key={todo?.id} id={todo.id} todo={todo} />
                
            ))}
        </ul>
    
    )
}

export default List