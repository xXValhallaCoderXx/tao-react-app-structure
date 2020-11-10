import { combineReducers } from 'redux';
import { userReducer } from "shared/slices/user"
import { toastReducer } from "shared/slices/toast"
import { productListReducer } from "pages/products/list/slice/dux"
import { productDetailReducer } from "pages/products/detail/slice/dux"

const rootReducer = combineReducers({
    user: userReducer,
    toast: toastReducer,
    productList: productListReducer,
    productDetails: productDetailReducer
})

export default rootReducer