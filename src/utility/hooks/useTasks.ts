import { useState } from "react";
import { Todo } from "../../types/types";
export const useTasks = () => {
    const [tasks, setTasks] = useState<Todo[]>([]);

    const addTodo = (todo: Todo) => {
        setTasks([...tasks, todo])
    }

    return { tasks, setTasks, addTodo }
}