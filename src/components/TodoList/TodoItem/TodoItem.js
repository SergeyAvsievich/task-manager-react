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

export const TodoItem = props => {

    const dispatch = useDispatch()

    const deleteHandler = id => {
        dispatch(deleteTodo(id))
    }

    const cls = [
        classes.TodoItem,
        props.complited ? classes.complited : null
    ]

    const changeHandler = id => {
        dispatch(updateTodo(id))
    }

    return (
        <li className={cls.join(' ')}>
            <span>
                <input
                    type="checkbox"
                    checked={props.complited}
                    onChange={() => changeHandler(props.id)} />
                {props.text}
            </span>
            <button className={classes.close} onClick={() => deleteHandler(props.id)}>&#10006;</button>
        </li>
    )
}
