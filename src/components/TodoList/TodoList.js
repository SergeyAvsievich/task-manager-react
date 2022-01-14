import React from 'react'
import { useSelector} from 'react-redux'
import { TodoItem } from './TodoItem/TodoItem'
import classes from './TodoList.module.css'

export const TodoList = () => {

    const todos = useSelector(state => state.todos.todos)
    return (
        <ul className={classes.TodoList}>
            {todos.map((todo, index) => {
                return(
                    <TodoItem
                        key={index}
                        id={todo.id}
                        text={todo.text}
                        complited={todo.complited}
                    />
                )
            })}
        </ul>
    )
}
