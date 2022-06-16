import React, { useState } from 'react'
import { useActions } from '../../hooks/useAction'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

const Auth: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { auth } = useActions()

    const loginHandler = async () => {
        auth(email, password, true)
        localStorage.setItem('userName', email)
    }

    const registerHandler = async () => {
        auth(email, password, false)
    }

    return (
        <div className={classes.Auth}>
            <div>
                <div className={classes.AuthForm}>
                    <div className={classes.FormHeader}>
                        <h1>Авторизация</h1>
                    </div>
                    <div className={classes.FormBody}>
                        <Input
                            type="email"
                            label="Введите email"
                            errorMessage=""
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        >
                            <div>
                                <i className="fas fa-at"></i>
                            </div>
                        </Input>

                        <Input
                            type="password"
                            label="Введите пароль"
                            errorMessage=""
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        >   
                            <div>
                                <i className="fas fa-user"></i>
                            </div>
                        </Input>
                    </div>

                    <div className={classes.FormFooter}>
                        <Button
                            type="success"
                            onClick={loginHandler}
                        >
                            Войти
                        </Button>
                        <Button
                            type="success-outline"
                            onClick={registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth