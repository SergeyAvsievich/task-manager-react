import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    const cls = [
        classes.Button,
    ]
    return (
        <Button
            className={cls.join(" ")}
        >
            {props.children}
        </Button>
    )
}

export default Button
