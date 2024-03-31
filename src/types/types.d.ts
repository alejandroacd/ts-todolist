import { TbFlagSearch } from "react-icons/tb"

export interface Todo {
    id: string,
    title: string,
    priority?: string,
    completed: boolean,
    description?: string
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
