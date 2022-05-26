import React from 'react'
import classes from './Button.module.css'

interface PropsButton {
    children?: React.ReactNode,
    type?: string,
    disabled?: boolean,
    onClick: () => Promise<void>
}

const Button: React.FC<PropsButton> = ({children, type, disabled, onClick}) => {
    const cls = [
        classes.Button,
    ]

    if (type) {
        cls.push(classes[type])
    }

    return (
        <button
            onClick={onClick}
            className={cls.join(" ")}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button