import React, {useState} from 'react'
import './Auth.css'
import {useDispatch} from 'react-redux'
import {auth} from '../../redux/actions/auth'

const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isLogin, setIsLogin] = useState(false)
    const dispatch = useDispatch()

    const loginHandler = (event) => {
        event.preventDefault()
        dispatch(auth(email, password, true))
    }

    const registerHandler = (event) => {
        event.preventDefault()
        dispatch(auth(email, password, false))
    }

    return (
        <div className="auth">
            <div>
                <h1>Авторизация</h1>
                <form className="authForm">
                    <input type="email" onChange={event => setEmail(event.target.value)}/>
                    <input type="password" onChange={event => setPassword(event.target.value)}/>
                    <button type="submit" onClick={loginHandler}>Войти</button>
                    <button type="submit" onClick={registerHandler}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
}

export default Auth
