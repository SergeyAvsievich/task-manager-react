export const initialState = {
    token: null
}

console.log(initialState)

// export function authReducer(state = initialState, action){
//     switch(action.type){
//         case 'AUTH_SUCCESS':
//             return{
//                 ...state,
//                 token: action.token
//             }
//         case 'AUTH_LOGOUT':
//             return{
//                 ...state,
//                 token: null
//             }        
//         default:
//             return state
//     }
// }