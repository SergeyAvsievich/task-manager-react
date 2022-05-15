import axios from "../axios/axios-todos"
import {ITodo} from "../interfaces"

//todos
const getTodos = async () => {
    try {
        const response = await axios.get<ITodo>('/todos.json')
        console.log('todos: ', response.data)
        const items: ITodo[] = Object.values(response.data).map(todo => todo)
        return items
    }catch(err){
        throw new Error('Произошла ошибка при загрузке списка задач...')
    }
}

const createTodo = async (data: string) => {
    try {
        const todo = {
            id: Date.now(),
            completed: false, 
            text: data
        }
    
        await axios.post('/todos.json', todo)
        return todo
    } catch(e) {
        throw new Error('Произошла ошибка при создании новой задачи...')
    }
}

const deleteTodo = async (todoId: number) => {
        try{
            const response = await axios.get<ITodo>('/todos.json')
            for(let [key, todo] of Object.entries(response.data)){
                todo.id === todoId && axios.delete(`/todos/${key}.json`)
            }
            return todoId    
        }catch(err){
            throw new Error('Произошла ошибка при удалении задачи...')
        }
}

const updateTodo = async (todoId: number) => {
    try{
        const response = await axios.get<ITodo>('/todos.json')

        for(let [key, todo] of Object.entries(response.data)){
            if(todo.id === todoId){
                todo.completed = !todo.completed
                axios.put(`/todos/${key}.json`, todo)
            }
        }
    return todoId
    }catch(err){
        throw new Error('Произошла ошибка при обновлении задачи...')
    }
}

export const api = {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo
}