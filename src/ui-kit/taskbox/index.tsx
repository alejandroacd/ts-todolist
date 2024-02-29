import { Todo, TodoId } from "../../types/types";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dropDownArrow } from "./utils";
import './index.css'
import { useState } from "react";
interface ChildProps {
    todo: Todo,
    id: string | TodoId,
    handleDelete: (id: string | TodoId) => void,
    addDescription: (id: string | TodoId, description: string) => void,
    markAsCompleted: (id: string | TodoId) => void
}

const TaskBox: React.FC<ChildProps> = ({ todo, id, handleDelete, addDescription, markAsCompleted }) => {
    const [description, setDescription] =  useState('')
    return (
        <li className="taskbox">
            <div onClick={() => dropDownArrow(id)} className="taskbox_info fade-in">
                <div className="taskbox_title">
                    <label className="checkbox_container">
                        <input  className="taskbox_checkbox" checked={todo?.completed} onChange={() => {
                            markAsCompleted(id)
                            }} type="checkbox" />
                        <span className="taskbox_checkmark"></span>
                    </label>
                    <span style={{textDecoration: todo?.completed ? 'line-through' : 'none'}} className="taskbox_text" >{todo.title}</span>
                </div>
                <MdKeyboardArrowDown/>
            </div>

            <div id={id as string} className="task_other_info">
                <textarea onChange={(e) => setDescription(e.target.value)} defaultValue={todo?.description} placeholder="Add a description to your task..." className="task_info_textarea"></textarea>
                <div className="task_info_buttons">
                <button onClick={() => addDescription(id, description)} className="task_info_save_button">Save Description </button>
                <button onClick={() => handleDelete(id)} className="task_info_delete_button">Delete task</button>
                </div>
            </div>
        </li>
    )
}

export default TaskBox