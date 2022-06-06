import React from 'react'
import classes from './TodoDescription.module.css'

export const TodoDescription: React.FC = () => {
  return (
    <div className={classes.TodoDescription}>
        <div>
            <h2>Купить молоко</h2>
            <i className="far fa-star"></i>
        </div>
        <div>
            <h3>Описание</h3>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis laboriosam aliquam ipsa in deleniti culpa temporibus ullam iste. Quod illo explicabo enim laborum ut corporis cum facilis sapiente velit esse!
            </div>
        </div>
    </div>
  )
}
