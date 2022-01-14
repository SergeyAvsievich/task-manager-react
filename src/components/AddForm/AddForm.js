import React, { useState } from 'react'
import './AddForm.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../redux/actions/todos'

export const AddForm = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const clickHandler = value => {
        if(!value.trim()) return
        dispatch(createTodo(value))
        setValue('')
    }

    return (
        <div className="todo-form">
            <i className="fas fa-comment-dots"></i>
            <input
                placeholder="Напишите что ну нужно сделать..."
                className="todo-input"
                type="text" 
                onChange={event => setValue(event.target.value)} 
                value={value}
            />
            <button 
                className="add-btn" 
                onClick={() => clickHandler(value)}
            >
                <i className="fas fa-plus"></i> Добавить
            </button>
        </div>
    )
}