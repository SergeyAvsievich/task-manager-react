import { TodosAction, TodosActionTypes, TodosState } from "../types/todos"

const initialState: TodosState = {
    todos: [],
    loading: false
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
    switch(action.type){
        case TodosActionTypes.GET_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.todos
            }
        case TodosActionTypes.CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case TodosActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.todoId)]
            }
        case TodosActionTypes.UPDATE_TODO:
            return{
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo.id === action.todoId) {todo.completed = !todo.completed}
                    return todo
                })]
            }
        default:
            return state
    }
}