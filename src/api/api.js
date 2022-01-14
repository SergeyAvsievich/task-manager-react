import axios from "../axios/axios-todos"

//todos
const getTodos = async () => {
    try{
        const response = await axios.get('/todos.json')
        const items = Object.values(response.data).map(todo => todo)
        return items
    }catch(err){
        console.log(err)
    }
}

const createTodo = async data => {
    const todo = {
        id: Date.now(),
        complited: false, 
        text: data
    }

    await axios.post('/todos.json', todo)
    return todo
}

const deleteTodo = async todoId => {
        try{
            const response = await axios.get('/todos.json')
            for(let [key, todo] of Object.entries(response.data)){
                todo.id === todoId && axios.delete(`/todos/${key}.json`)
            }
            return todoId    
        }catch(err){
            console.log(err)
        }
}

const updateTodo = async todoId => {
    try{
        const response = await axios.get('/todos.json')

        for(let [key, todo] of Object.entries(response.data)){
            if(todo.id === todoId){
                todo.complited = !todo.complited
                axios.put(`/todos/${key}.json`, todo)
            }
        }
    return todoId
    }catch(err){
        console.log(err)
    }
}

// auth
const auth = async (email, password, isLogin) => {

    const authData = {
        email,
        password,
        returnSecureToken: true
    }

    const apiKey = 'AIzaSyAoyg_N-EArBgDBlbbB2YbgOCTH8vLrZkI'

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}` 
    
    if(isLogin){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
    }

    const response = await axios.post(url, authData)
    const data = response.data

    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 10)

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