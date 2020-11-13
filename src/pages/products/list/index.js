import React from "react"
import history from "shared/utils/router"
import { useDispatch, useSelector } from "react-redux"

import { ACTIONS, selectProducts, selectApiStatus } from "./slice/dux"

import ListView from "./List"

const ListContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectProducts)
    const { loading } = useSelector(selectApiStatus)

    React.useEffect(() => {
        dispatch(ACTIONS.REQUEST_DATA())
    }, [])

    const onRowClick = (row) => history.push(`/products/${row.id}`)
    return <ListView onRowClick={onRowClick} data={data} loading={loading} />
}

export default ListContainer