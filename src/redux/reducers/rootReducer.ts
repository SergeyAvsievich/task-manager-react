import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {todosReducer} from './todosReducer'

export const rootReducer = combineReducers({
    todos: todosReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>