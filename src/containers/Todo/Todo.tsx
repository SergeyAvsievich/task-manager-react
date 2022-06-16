import React, { useEffect } from 'react'
import { TodoList } from '../../components/TodoList/TodoList'
import { AddForm } from '../../components/AddForm/AddForm'
import Loader from '../../components/UI/Loader/Loader'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
import Sidebar from '../../components/SideBar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { TodoDescription } from '../../components/TodoDescription/TodoDescription'
import classes from './Todo.module.css'
// import { TodoDescription } from '../../components/TodoDescription/TodoDescription'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Todo: React.FC = () => {

    const { getTodos } = useActions()
    let userId = useTypedSelector(state => state.auth.token)
    // const params = useParams() // '/:id/2'
    // let todoIndex: number = 0

    // if (Array.isArray(params)) {
        // todoIndex = +params.slice(1)
    // }

    if (!userId) {
        userId = localStorage.getItem('userId')
    }

    useEffect(() => {
        // console.log('useeffect', userId)
        if (typeof userId === 'string') {
            getTodos(userId)
        }
    }, [])

    const loading = useTypedSelector(state => state.todos.loading)
    // {console.log('tabIndex: ', todoIndex)}

    // function renderDescription() {
        // return loading ? '' 
        // : <TodoDescription currentTodoIndex={todoIndex}/>
    // }

    return (
        <div className={classes.Todo}>
            {/* <Routes> */}
                {/* <Route 
                    path="/*" 
                    element={
                        <Navigate 
                            to={`/todos/${userId}`}
                            replace
                        />}
                /> */}
                {/* <Route path={`/${todoIndex.toString()}`} element={renderDescription()}/> */}
            {/* </Routes> */}
            <Sidebar /> 
            <div className={classes.TodoCentralBlock}>
                <Navbar />
                <div className={classes.TodoContent}>
                    <div>
                        {loading
                            ? <Loader />
                            : <>
                                <TodoList />
                                <AddForm />
                            </>
                        }
                    </div>
                </div>
            </div>
                <TodoDescription currentTodoIndex={0} />
        </div>
    )
}

export default Todo