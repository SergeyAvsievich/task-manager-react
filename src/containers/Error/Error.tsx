import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classes from './Error.module.css'

export const Error: React.FC = () => {
    const userId = useTypedSelector(state => state.auth.token)
    console.log('error userId: ', userId)
  return (
    <div className={classes.Error}>
        <h1>
            Страница не найдена.
        </h1>
    </div>
  )
}
