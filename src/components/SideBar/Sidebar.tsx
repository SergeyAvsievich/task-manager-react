import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useAction'
// import PopUpWindowProfile from '../PopUpWindowProfile/PopUpWindowProfile'
import './Sidebar.css'

const Sidebar: React.FC = () => {

    const {logout} = useActions()
    const navigate = useNavigate()

    const exitHandler = () => {
        logout()
        navigate("/");
    }

    return (
        <div className="menu">
            <div className="logo">
                <h2>Todo App</h2>
            </div>
            <ul className="menu-list">
                <li className="menu-item">
                    <i className="far fa-clipboard"></i>
                    Toggle
                </li>
                <li className="menu-item"><i className="fas fa-paper-plane"></i>Недавние задачи</li>
                <li className="menu-item"><i className="fas fa-star"></i> Избранное</li>
                <li className="menu-item"><i className="fas fa-bell"></i> Добавить уведомление</li>
            </ul>
            <div className="profile">
                {/* <i className="fas fa-search"></i>
                <input className="search" type="text" placeholder="Поиск"/>
                <div className="user">
                    <strong>
                        <i className="fas fa-user">
                        </i>Сергей Владимирович
                        <i className="fas fa-caret-down"></i>
                    </strong>
                </div> */}
                    {/* <PopUpWindowProfile/> */}
                {/* <button
                    className="btn-exit"
                    onClick={exitHandler}
                >Выйти</button> */}
            </div>
        </div>
    )
}

export default Sidebar