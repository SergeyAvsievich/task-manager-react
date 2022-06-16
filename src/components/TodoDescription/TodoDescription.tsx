import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classes from './TodoDescription.module.css'

interface TodoDescriptionProps {
  currentTodoIndex: number
}

export const TodoDescription: React.FC<TodoDescriptionProps> = ({currentTodoIndex}) => {

  const todos = useTypedSelector(state => state.todos.todos)
  console.log('tododescription todos: ', todos)
  // const text: string = todos[currentTodoIndex].text
  return (
    <div className={classes.TodoDescription}>
      <div>
        <h2>Купить арбуз</h2>
        <i className="far fa-star"></i>
      </div>
      <div>
        <h3>Description</h3>
        <div>
          Автор дорабатывает функционал 
        </div>
      </div>
    </div>
  )
}