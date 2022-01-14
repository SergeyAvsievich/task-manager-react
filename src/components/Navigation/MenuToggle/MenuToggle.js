import React from 'react'
import classes from './MenuToggle.module.css'

export const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ]

    if(props.isOpen){
        cls.push('fa-bars')
        cls.push(classes.open)
    }else{
        cls.push('fa-bars')
    }

    return (
        <i 
            className={cls.join(' ')}
            onClick={props.onToggle}
        > 
        </i>
    )
}
