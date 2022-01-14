import {api} from '../../api/api'

export function getTodos() {
    return dispatch => {
        api.getTodos()
        .then(todos => dispatch({
            type: 'GET_TODOS',
            todos
        }))
    }
}

export function createTodo(value) {
    return dispatch => api.createTodo(value)
        .then(todo => dispatch({
            type: 'CREATE_TODO',
            todo
        }))
}

export function deleteTodo(todoId){
    return dispatch => api.deleteTodo(todoId)
        .then(todoId => dispatch({
            type: 'DELETE_TODO',
            todoId
        }))
}

export function updateTodo(todoId){
    return dispatch => api.updateTodo(todoId)
        .then(todoId => dispatch({
            type: 'UPDATE_TODO',
            todoId
        }))
}