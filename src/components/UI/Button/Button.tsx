import React from 'react'
import classes from './Button.module.css'

interface IPropsButton {
    children?: React.ReactNode
}

const Button: React.FC<IPropsButton> = ({children}) => {
    const cls = [
        classes.Button,
    ]
    return (
        <button
            className={cls.join(" ")}
        >
            {children}
        </button>
    )
}

export default Button