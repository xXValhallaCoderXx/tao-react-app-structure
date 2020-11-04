import React from "react"
import {ACTIONS} from "./slice/dux"
import {useDispatch, useSelector} from "react-redux"
import {selectProducts} from "./slice/dux"

const ListContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts)
    React.useEffect(() => {
        dispatch(ACTIONS.REQUEST_DATA())
    }, [])
    return (
        <div>List Container</div>
    )
}

export default ListContainer