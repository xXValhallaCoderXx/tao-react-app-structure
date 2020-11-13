import React from "react"

const TableBody = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

const Item = ({ children }) => {
    return <td>{children}</td>
}

TableBody.Item = Item

export default TableBody