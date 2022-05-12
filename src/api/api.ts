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

// auth
const auth = async (email: string, password: string, isLogin: boolean) => {

    const authData = {
        email,
        password,
        returnSecureToken: true
    }

    const apiKey = 'AIzaSyCc9-bu9XR0jdCK9jTL9c-aRbQOZugXhy8'

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}` 
    
    if(isLogin){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
    }

    interface IData {
        expiresIn: number,
        idToken: string,
        localId: string
    }

    interface IUser{
        email: string,
        password: string,
        returnSecureToken: boolean
        data: IData
    }

    const response: IUser = await axios.post(url, authData)
    const data: IData = response.data

    const expirationDate: string = new Date(new Date().getTime() + data.expiresIn * 10).toString()

    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    localStorage.setItem('expirationDate', expirationDate)
   
    return data
}

export const api = {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo,
    auth
}