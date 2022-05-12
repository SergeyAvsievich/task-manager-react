import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as TodosActionsCreators from '../redux/actions/todos'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TodosActionsCreators, dispatch)
}