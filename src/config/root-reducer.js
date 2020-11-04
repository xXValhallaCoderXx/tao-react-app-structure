import { combineReducers } from 'redux';
import { userReducer } from "../shared/slices/user"
import { toastReducer } from "../shared/slices/toast"

const rootReducer = combineReducers({
    user: userReducer,
    toast: toastReducer
})

export default rootReducer