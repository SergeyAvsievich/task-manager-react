const initialState = {
    todos: [],
    loading: false
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_TODOS':
            return{
                ...state,
                loading: false,
                todos: action.todos
            }
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.todoId)]
            }
        case 'UPDATE_TODO':
            return{
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo.id === action.todoId) {todo.complited = !todo.complited}
                    return todo
                })]
            }
        default:
            return state
    }
}