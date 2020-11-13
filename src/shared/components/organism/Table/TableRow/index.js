import React from "react"

const TableRow = ({ children, ...rest }) => {
    return (
        <tr {...rest}>
            {children}
        </tr>
    )
}

export default TableRow