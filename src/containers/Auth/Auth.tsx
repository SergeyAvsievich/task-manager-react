import React, {useState} from 'react'
import './Auth.css'
import {useActions} from '../../hooks/useAction'
import { useHistory } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

const Auth: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {auth} = useActions()
    
    const history = useHistory()

    const loginHandler = async () => {
        auth(email, password, true)
        history.push("/todos");
    }

    const registerHandler = async () => {
        auth(email, password, false)
    }

    return (
        <div className="auth">
            <div>
                <h1>Авторизация</h1>
                <div className="authForm">
                    <Input
                        type="email"
                        label="Введите email"
                        errorMessage=""
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />

                    <Input
                        type="password"
                        label="Введите пароль"
                        errorMessage=""
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button 
                        type="success"
                        onClick={loginHandler}
                    >
                        Войти
                    </Button>
                    <Button 
                        type="primary"
                        onClick={registerHandler}
                    >
                        Зарегистрироваться
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Auth