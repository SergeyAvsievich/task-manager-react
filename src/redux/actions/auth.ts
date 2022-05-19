import axios from 'axios'
import { Dispatch } from 'react'
import { getTodos } from '../../firebase/firebase'
import { AuthActionTypes, AuthState } from '../types/auth'

interface IAuthData {
    email: string,
    password: string,
    returnSecureToken: boolean
}

export function auth (email: string, password: string, isLogin: boolean) {
    return async (dispatch: Dispatch<AuthState>) => {
        const authData: IAuthData = {
            email,
            password,
            returnSecureToken: true
        }

        // console.log(getTodos())
    
        const apiKey: string = 'AIzaSyCc9-bu9XR0jdCK9jTL9c-aRbQOZugXhy8'
        let url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
        }

        interface IData {
            expiresIn: string,
            idToken: string,
            localId: string
        }

        interface IUser{
            email: string,
            password: string,
            returnSecureToken: boolean
            data: IData
        }

        const response: IUser = await axios.post(url, authData)
        const data: IData = response.data

        console.log('data: ', data)

        const expirationDate: string = new Date(new Date().getTime() + +data.expiresIn * 10).toString()

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        
        dispatch(authSuccess(data.idToken))
        autoLogout(data.expiresIn)
    }
}

export function autoLogout(time: string) {
    return (dispatch: Dispatch<AuthState>) => {
        setTimeout(() => {
            dispatch(logout())
        }, +time * 1000)
    }
}

export function logout() {
    
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return {
        type: AuthActionTypes.AUTH_LOGOUT,
        token: null
    } 
}

export function authSuccess(token: string) {
    return {
        type: AuthActionTypes.AUTH_SUCCESS,
        token
    }
}