import React, {useEffect} from 'react'
import './Todo.css'
import {TodoList} from '../../components/TodoList/TodoList'
import {AddForm} from '../../components/AddForm/AddForm'
import Loader from '../../components/UI/Loader/Loader'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useAction'
import {useNavigate} from 'react-router-dom'

const Todo: React.FC = () => {

    const {getTodos} = useActions()
    const loading = useTypedSelector(state => state.todos.loading)
    const userId = useTypedSelector(state => state.auth.token)
    console.log('todos userId: ', userId)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (typeof userId === 'string') {
            getTodos(userId)
        }
    }, [])

    return (
        <div className="todo-wrapper">
            <div>
                <h1>Task manager</h1>
                {/* <AddForm></AddForm> */}
                {/* <Loader/> */}
                {loading 
                    ? <Loader/> 
                    : <><AddForm /><TodoList /></>
                }
            </div>
        </div>
    )
}

export default Todo