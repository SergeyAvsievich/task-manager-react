export interface AuthState {
    token: string | null
}

export enum AuthActionTypes {
    AUTH_SUCCESS = 'AUTH_SUCCESS',
    AUTH_LOGOUT = 'AUTH_LOGOUT'
}

interface AuthLogoutAction {
    type: AuthActionTypes.AUTH_LOGOUT
    token: null
}

interface AuthSuccessAction {
    type: AuthActionTypes.AUTH_SUCCESS,
    token: string
}

export type AuthAction = AuthSuccessAction | AuthLogoutAction