import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { TodoItem } from './TodoItem/TodoItem'
import classes from './TodoList.module.css'

export const TodoList: React.FC = () => {

    const todos = useTypedSelector(state => state.todos.todos)

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