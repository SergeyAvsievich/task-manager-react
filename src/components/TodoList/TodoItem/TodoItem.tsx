import React from 'react'
import { useActions } from '../../../hooks/useAction'
import classes from './TodoItem.module.css'
// import { NavLink } from 'react-router-dom'

interface TodoItemProps {
    id: number,
    text: string,
    completed: boolean,
    // index: number
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {

    // const user = localStorage.getItem('userId')

    const {deleteTodo, updateTodo} = useActions()

    const deleteHandler = (id: number) => {
        deleteTodo(id)
    }

    const cls = [
        classes.TodoItem,
        props.completed ? classes.completed : null
    ]

    const changeHandler = (id: number) => {
        console.log('id: ', id)
        updateTodo(id)
    }

    return (
        <li className={cls.join(' ')}>
            {/* <NavLink to={`/todos/${user}/${props.index}`}> */}
            {/* <NavLink to={`/toggle`}> */}
                <div className="checkbox">
                    <input 
                        className="custom-checkbox" 
                        type="checkbox" 
                        id={props.id.toString()}
                        checked={props.completed}
                        onChange={() => changeHandler(props.id)} 
                    />
                    <label htmlFor={props.id.toString()}>{props.text}</label>
                </div>       
                <button 
                    className={classes.close}
                    onClick={() => deleteHandler(props.id)}
                >
                    &#10006;
                </button>
            {/* </NavLink> */}
        </li>
    )
}