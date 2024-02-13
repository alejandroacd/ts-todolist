export interface Todo {
    id: string,
    title: string,
    priority: string,
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>