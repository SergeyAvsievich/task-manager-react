import React, { useState } from 'react'
import './AddForm.css'
import { useActions } from '../../hooks/useAction'

export const AddForm: React.FC = () => {

    const {createTodo} = useActions()

    const [value, setValue] = useState('')

    const clickHandler = (value: string) => {
        if(!value.trim()) return
        createTodo(value)
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