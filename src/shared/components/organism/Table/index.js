import React from "react"
import { Table } from 'reactstrap';
import TBody from "./TableBody"
import THead from "./TableHead"
import TableRow from "./TableRow"

// Since TBody / THead / TableRow are exclusive to Table I keep them Table Folder

const TableContainer = ({ cols, data, onRowClick }) => {

    const handleRowClick = (row) => () => {
        onRowClick && onRowClick(row)
    }
    return (
        <Table hover striped>
            <THead>
                <TableRow>
                    {cols.map((headerItem, index) => <THead.Item key={index}>{headerItem.title}</THead.Item>)}
                </TableRow>
            </THead>
            <TBody>
                {data.map((item, index) => (
                    <TableRow key={index} onClick={handleRowClick(item)}>
                        {cols.map((col, key) => <TBody.Item key={key}>{col.render(item)}</TBody.Item>)}
                    </TableRow>
                ))}
            </TBody>
        </Table>
    )
}


export default TableContainer