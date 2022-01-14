import { api } from "../../api/api"

export function auth(email, password, isLogin){
    return dispatch => api.auth(email, password, isLogin)
        .then(data => {
            dispatch({
                type: 'AUTH_SUCCESS',
                token: data.idToken
            })
            return data
        })
        .then(data => {
            console.log('Этот промис выполнился')
            autoLogout(data.expiresIn)
        })
        .catch(err => {
            console.log('error: ', err)
        })
}

export function autoLogout(time){
    return dispatch => {
        console.log('Этот промис выполнился 2')
        setTimeout(() => {
            dispatch(logout())
            alert('time out')
        }, time * 10)
    }
}

export function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return{
        type: 'AUTH_LOGOUT',
    }
}