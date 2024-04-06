import { Todo } from "../../types/types"
import TaskBox from "../../ui-kit/taskbox"
import { DndContext, closestCenter, MouseSensor, useSensor, useSensors } from "@dnd-kit/core"
import { dropDownArrow } from "../../ui-kit/taskbox/utils"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import './styles.css'
import { useTodos } from "../../utility/context/TodosContext"
interface ChildProps {
    todos: Todo[]
}

const List: React.FC<ChildProps> = ({ todos }) => {
    const { deleteTodo, addDescription, markAsCompleted, setFilterSelected, setTodos, setIsSorted } = useTodos()
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
        distance: 5
        }
    })
    const sensors = useSensors(mouseSensor)
    function handleDragEnd(event: any) {
        setIsSorted(false)
        const { active, over } = event;
        if (active.id !== over.id) {
            setFilterSelected((todos) => {
                const activeIndex = todos.findIndex(todo => active.id === todo.id);
                const overIndex = todos.findIndex(todo => over.id === todo?.id);
                const newArray = arrayMove(todos, activeIndex, overIndex);
                setTodos(newArray)
                localStorage.setItem('todos', JSON.stringify(newArray))
                return newArray
            });
        }
    }


    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext  items={todos} strategy={verticalListSortingStrategy}>

                <ul className="list">

                    {todos?.map((todo) => (

                        <TaskBox

                            key={todo?.id}
                            id={todo?.id}
                            todo={todo}
                            handleDelete={deleteTodo}
                            addDescription={addDescription}
                            markAsCompleted={markAsCompleted}
                             />
                            
                    ))}
                </ul>

            </SortableContext>
        </DndContext>

    )
}

export default List