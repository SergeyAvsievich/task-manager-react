import React from 'react'
import './PopUpWindowProfile.css'

const PopUpWindowProfile = () => {
    return (
        <div className="pop-up">
            <div className="title">
                <span>Учетная запись</span>
                <span className="btn-close">&times;</span>
            </div>
            <hr/>
            <h5>Сергей Владимироваич</h5>
            <span>serg@gmail.com</span>
            <i className="fa fa-user"></i>
            <span className="btn">Установить фотографию</span>
            <hr/>
            <ul>
                <li><small>Действия</small></li>
                <li><small>Настройки</small></li>
                <li><small>Горячие клавиши</small></li>
            </ul>
        </div>
    )
}

export default PopUpWindowProfile