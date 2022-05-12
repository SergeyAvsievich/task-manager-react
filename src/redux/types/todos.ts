import { ITodo } from "../../interfaces"

export enum TodosActionTypes {
    GET_TODOS = 'GET_TODOS',
    CREATE_TODO = 'CREATE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    UPDATE_TODO = 'UPDATE_TODO'    
}

export interface TodosState {
    todos: ITodo[],
    loading: boolean
}

export interface GetTodosAction {
    type: TodosActionTypes.GET_TODOS,
    todos: ITodo[] 
}

export interface CreateTodoAction {
    type: TodosActionTypes.CREATE_TODO,
    todo: ITodo 
}

export interface DeleteTodoAction {
    type: TodosActionTypes.DELETE_TODO, 
    todoId: number
}

export interface UpdateTodoAction {
    type: TodosActionTypes.UPDATE_TODO, 
    todoId: number
}

export type TodosAction = GetTodosAction | CreateTodoAction | DeleteTodoAction | UpdateTodoAction  