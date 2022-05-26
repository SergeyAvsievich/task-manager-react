import * as AuthActionCreators from './auth'
import * as TodoActionCreators from './todos'

export default {
    ...AuthActionCreators,
    ...TodoActionCreators,
}