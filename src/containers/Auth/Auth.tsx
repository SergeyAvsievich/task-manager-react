import React, {useState} from 'react'
import './Auth.css'
// import {useDispatch} from 'react-redux'
// import {auth} from '../../redux/actions/auth'
import axios from 'axios'

const Auth: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    // const [isLogin, setIsLogin] = useState(false)
    // const dispatch = useDispatch()

    interface IAuthData {
        email: string,
        password: string,
        returnSecureToken: boolean
    }

    const loginHandler = async () => {
        console.log('email: ', email)
        console.log('email: ', password)
        
        const authData: IAuthData = {
            email,
            password,
            returnSecureToken: true
        }

        try {
            const apiKey = 'AIzaSyCc9-bu9XR0jdCK9jTL9c-aRbQOZugXhy8'
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, authData)
            console.log('response: ', response.data)
        } catch(e) {
            console.log(e)
        }
        // dispatch(auth(email, password, true))
    }

    const registerHandler = async () => {
        console.log('email: ', email)
        console.log('email: ', password)

        const authData: IAuthData = {
            email,
            password,
            returnSecureToken: true
        }

        try {
            const apiKey = 'AIzaSyCc9-bu9XR0jdCK9jTL9c-aRbQOZugXhy8'
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, authData)
            console.log('response: ', response.data)
        } catch(e) {
            console.log('Ошибка')
            console.log(e)
        }
        // dispatch(auth(email, password, false))
    }

    return (
        <div className="auth">
            <div>
                <h1>Авторизация</h1>
                <div className="authForm">
                    <input 
                        type="email" 
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        type="password" 
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button 
                        type="submit" 
                        onClick={loginHandler}
                    >Войти</button>
                    <button 
                        type="submit" 
                        onClick={registerHandler}
                    >Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Auth