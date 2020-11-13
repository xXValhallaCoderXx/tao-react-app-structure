import React from "react"

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

const ListView = ({ onRowClick, data, loading }) => {

    return (
        <Template title="Products List">
            <Table cols={tableColumns()} data={data} onRowClick={onRowClick} loading={loading} />
        </Template>
    )
}

export default ListView