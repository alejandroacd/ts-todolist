import { Todo } from "../../types/types";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dropDownArrow, linetrough } from "./utils";
import './index.css'
interface ChildProps {
    todo: Todo,
    id: string
    //handleDelete: (id: TodoId) => void,
}

const TaskBox: React.FC<ChildProps> = ({ todo, id }) => {
    return (
        <li className="taskbox">
            <div className="taskbox_info">
                <div className="taskbox_title">
                    <label className="checkbox_container">
                        <input className="taskbox_checkbox" onChange={() => linetrough(id)} type="checkbox" />
                        <span className="taskbox_checkmark"></span>
                    </label>
                    <span className="taskbox_text" >{todo.title}</span>
                </div>
                <MdKeyboardArrowDown onClick={() => dropDownArrow(id)} />
            </div>

            <div id={id} className="task_other_info">
                <textarea placeholder="Add a description to your task..." className="task_info_textarea"></textarea>
            </div>
        </li>
    )
}

export default TaskBox