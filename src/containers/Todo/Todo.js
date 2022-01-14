import React, {useEffect} from 'react'
import './Todo.css'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../../components/TodoList/TodoList'
import {AddForm} from '../../components/AddForm/AddForm'
import { getTodos } from '../../redux/actions/todos'
import Loader from '../../components/UI/Loader/Loader'

const Todo = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.todos.loading)
    
    useEffect(() => {
        dispatch(getTodos())
        console.log("loading")
    }, [])

    return (
        <div className="todo-wrapper">
            <div>
                <h1>Task manager</h1>
                {/* <AddForm></AddForm> */}
                {/* <Loader/> */}
                {loading 
                    ? <Loader/> 
                    : <><AddForm /><TodoList/></>
                }
            </div>
        </div>
    )
}

export default Todo