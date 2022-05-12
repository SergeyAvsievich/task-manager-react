import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../../redux/actions/todos'
import classes from './TodoItem.module.css'

/*
    1. Сделать Backdrop menu +
    2. Подключить роутер +
    3. Добавлять задачи в firebase +
    4. Удалять из firebase +
    5. Loader добавить +
    6. Стилизовать компоненты inputs, buttons
    7. Авторизация
    8. Пользователь может менять тему
    *******************************************
    9. Система оповещений для пользователя
    10. Деплой
    11. Реализовать Alert

*/

interface ITodos {
    id: number,
    text: string,
    completed: boolean
}

export const TodoItem: React.FC<ITodos> = (props) => {

    const dispatch = useDispatch()

    const deleteHandler = (id: number) => {
        dispatch(deleteTodo(id))
    }

    const cls = [
        classes.TodoItem,
        props.completed ? classes.completed : null
    ]

    const changeHandler = (id: number) => {
        dispatch(updateTodo(id))
    }

    return (
        <li className={cls.join(' ')}>
            <span>
                <input
                    type="checkbox"
                    checked={props.completed}
                    onChange={() => changeHandler(props.id)} 
                />        
                {props.text}
            </span>
            <button 
                className={classes.close}
                onClick={() => deleteHandler(props.id)}
            >
                &#10006;
            </button>
        </li>
    )
}