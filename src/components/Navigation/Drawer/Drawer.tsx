import React, {useState} from 'react'
import classes from './Drawer.module.css'
import { Backdrop } from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'
import ChangeTheme from '../../ChangeTheme/ChangeTheme'

interface IPropsDrawer {
    onClose: () => void,
    isOpen: Boolean
}

export const Drawer: React.FC<IPropsDrawer> = ({onClose, isOpen}) => {

    const [menu, setMenu] = useState<Boolean>(false)

    const menuCloseHandler = () => {
        setMenu(false)
    }

    const toggleMenuHandler = () => {
        setMenu(!menu)
    }

    const links = [
        {to: '/change-theme', label: 'Сменить тему', exact: false},
    ]

    const cls = [classes.Drawer]
    if(!isOpen){
        cls.push(classes.close)
    }

    const clickHandler = () => {
        onClose()
    }

    return (
        <>
            <div className={cls.join(' ')}>
                <span>Меню</span>
                <hr/>
                <ul>
                    {links.map((link, index) => {
                        return(
                            <li key={index}>
                                <button onClick={toggleMenuHandler}>{link.label}</button>
                            </li>
                        )
                    })}
                </ul>
                {menu ? <ChangeTheme onClose={onClose} /> : null}
            </div>
            {/* { props.isOpen ? <Backdrop onClick={props.onClose}/> : null} */}
        </>            
    )
}