import { AuthAction, AuthActionTypes, AuthState } from "../types/auth"

export const initialState: AuthState = {
    token: null
}

export function authReducer(state = initialState, action: AuthAction): AuthState {
    switch(action.type){
        case AuthActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AuthActionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: action.token
            }        
        default:
            return state
    }
}