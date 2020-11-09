import React from "react"
import Body from "shared/components/atoms/TableBody"
import Head from "shared/components/atoms/TableHead"
import TableRow from "shared/components/atoms/TableRow"


const Table = ({ children }) => {
    return (
        <table>{children}</table>
    )
}

const TableHeader = ({ children }) => {
    return (
        <tr style={{ backgroundColor: "red" }}>
            {children}
        </tr>
    )
}

const TableItem = ({ children }) => {
    return <th>{children}</th>
}

const TableBody = ({ children }) => {
    return children.map(row => {
        console.log("ROW: ", row)
        return (
            <tr>
                Item
            </tr>
        )
    })
}

Table.Header = TableHeader;
Table.Header.Item = TableItem
Table.Body = TableBody


export default Table