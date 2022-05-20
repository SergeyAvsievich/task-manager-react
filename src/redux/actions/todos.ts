import {Dispatch} from 'react'
import {api} from '../../api/api'
import {TodosAction, TodosActionTypes} from '../types/todos'

export function getTodos(userId: string) {
    return (dispatch: Dispatch<TodosAction>) => {
        api.getTodos(userId)
        .then(todos => dispatch({
            type: TodosActionTypes.GET_TODOS,
            todos
        }))
    }
}

export function createTodo(value: string, userId: string) {
    return (dispatch: Dispatch<TodosAction>) => api.createTodo(value, userId)
        .then(todo => dispatch({
            type: TodosActionTypes.CREATE_TODO,
            todo
        }))
}

export function deleteTodo(todoId: number){
    return (dispatch: Dispatch<TodosAction>) => api.deleteTodo(todoId)
        .then((todoId) => dispatch({
            type: TodosActionTypes.DELETE_TODO,
            todoId
        }))
}

export function updateTodo(todoId: number){
    return (dispatch: Dispatch<TodosAction>) => api.updateTodo(todoId)
        .then(todoId => dispatch({
            type: TodosActionTypes.UPDATE_TODO,
            todoId
        }))
}