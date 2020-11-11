import React from "react"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { ACTIONS, selectProducts, selectApiStatus } from "./slice/dux"

import Template from "shared/templates/ListView"
import Table from "shared/components/organism/Table"

const tableColumns = () => {
    return [
        {
            title: "ID",
            key: "id",
            render: data => data.id,
        },
        {
            title: "Name",
            key: "name",
            render: data => data.name
        },
        {
            title: "Email",
            key: "email",
            render: data => data.email
        }
    ]
}

const ListContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const products = useSelector(selectProducts)
    const { loading } = useSelector(selectApiStatus)

    React.useEffect(() => {
        dispatch(ACTIONS.REQUEST_DATA())
    }, [])

    const onRowClick = (row) => history.push(`/products/${row.id}`)
    return (
        <Template title="Products List">
            <Table cols={tableColumns()} data={products} onRowClick={onRowClick} loading={loading} />
        </Template>
    )
}

export default ListContainer