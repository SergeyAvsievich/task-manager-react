import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useAction'
import classes from './Sidebar.module.css'

const Sidebar: React.FC = () => {

    const { logout } = useActions()
    const navigate = useNavigate()
    const userName = localStorage.getItem('userName')

    const exitHandler = () => {
        setTimeout(() => navigate("/"), 0)
        logout()
    }

    return (
        <div className={classes.Sidebar}>
            <div className={classes.UserName}>
                <h3 onClick={exitHandler}>{userName} </h3>
                <strong><i className="fas fa-door-open"></i>Выход</strong>
            </div>
            <ul className={classes.MenuList}>
                <li className={classes.MenuItem}>
                    <i className="far fa-clipboard"></i>
                    Toggle
                </li>
                <li className={classes.MenuItem}><i className="fas fa-paper-plane"></i>Недавние задачи</li>
                <li className={classes.MenuItem}><i className="fas fa-star"></i> Избранное</li>
                <li className={classes.MenuItem}><i className="fas fa-bell"></i> Добавить уведомление</li>
            </ul>
        </div>
    )
}

export default Sidebar