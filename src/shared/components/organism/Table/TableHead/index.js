import React from "react"

const TableHead = ({ children }) => {
    return (
        <thead>
            {children}
        </thead>

    )
}

const Item = ({ children }) => {
    return <th>{children}</th>
}

TableHead.Item = Item



export default TableHead