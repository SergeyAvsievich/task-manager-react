import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useActions } from '../../hooks/useAction'
import PopUpWindowProfile from '../PopUpWindowProfile/PopUpWindowProfile'
import './Navibar.css'

const Navibar: React.FC = () => {

    const {logout} = useActions()
    const history = useHistory()

    const exitHandler = () => {
        logout()
        history.push("/auth");
    }

    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink to={'/toggle'}>
                        <i className="far fa-clipboard"></i>
                        Toggle
                    </NavLink>
                </li>
                <li className="nav-item"><i className="fas fa-paper-plane"></i>Недавние задачи</li>
                <li className="nav-item"><i className="fas fa-star"></i> Избранное</li>
                <li className="nav-item"><i className="fas fa-bell"></i> Добавить уведомление</li>
            </ul>
            <div className="profile">
                <i className="fas fa-search"></i>
                <input className="search" type="text" placeholder="Поиск"/>
                <div className="user">
                    <strong>
                        <i className="fas fa-user">
                        </i>Сергей Владимирович
                        <i className="fas fa-caret-down"></i>
                    </strong>
                    {/* <PopUpWindowProfile/> */}
                </div>
                <button
                    className="btn-exit"
                    onClick={exitHandler}
                >Выйти</button>
            </div>
        </nav>
    )
}

export default Navibar