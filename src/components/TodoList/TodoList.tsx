import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { TodoItem } from './TodoItem/TodoItem'
import classes from './TodoList.module.css'

export const TodoList: React.FC = () => {

    // const todos = useTypedSelector(state => state.todos.todos)
    const todos = [
        {id: 0, text: 'Купить молоко', completed: false},
        {id: 1, text: 'Купить арбуз', completed: false},
        {id: 2, text: 'Помыть полы', completed: true},
        {id: 3, text: 'Сварить борщ', completed: false},
    ]
    return (
        <ul className={classes.TodoList}>
            {todos.map((todo, index) => {
                return(
                    <TodoItem
                        key={index}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                    />
                )
            })}
        </ul>
    )
}