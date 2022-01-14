import { combineReducers } from "redux";
import {todosReducer} from './todosReducer'
import {authReducer} from './auth'

export const rootReducer = combineReducers({
    todos: todosReducer,
    auth: authReducer
})