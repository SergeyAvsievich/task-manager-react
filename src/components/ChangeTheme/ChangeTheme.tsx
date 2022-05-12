import React from 'react'
import classes from './ChangeTheme.module.css'

interface IPropsChngeTheme {
    onClose: () => void
} 

const ChangeTheme: React.FC<IPropsChngeTheme> = ({onClose}) => {

    // const cls = [classes.ChangeTheme]
    // if(!props.isOpen){
    //     cls.push(classes.close)
    // }

    // const clickHandler = () => {
    //     props.onClose()
    // }

    return (
        <>
            <div className={classes.ChangeTheme}>
                <button onClick={onClose}>Назад</button>
                <span>Change Theme</span>
            </div>
        </>            
    )
}

export default ChangeTheme