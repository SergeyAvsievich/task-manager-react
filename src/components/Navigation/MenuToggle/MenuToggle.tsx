import React from 'react'
import classes from './MenuToggle.module.css'

type PropsMenuToggle = {
    isOpen: Boolean,
    onToggle: () => void
}

export const MenuToggle: React.FC<PropsMenuToggle> = ({isOpen, onToggle}) => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ]

    if(isOpen){
        cls.push('fa-bars')
        cls.push(classes.open)
    }else{
        cls.push('fa-bars')
    }

    return (
        <i 
            className={cls.join(' ')}
            onClick={onToggle}
        > 
        </i>
    )
}