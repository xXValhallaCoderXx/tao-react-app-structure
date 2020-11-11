import React from "react"
import { Table } from 'reactstrap';
import TableBody from "shared/components/atoms/TableBody"
import TableHead from "shared/components/atoms/TableHead"
import TableRow from "shared/components/atoms/TableRow"


const TableContainer = ({ cols, data, onRowClick }) => {

    const handleRowClick = (row) => () =>{
        onRowClick && onRowClick(row)
    }
    return (
        <Table hover striped>
            <TableHead>
                <TableRow>
                    {cols.map((headerItem, index) => <th key={index}>{headerItem.title}</th>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index} onClick={handleRowClick(item)}>
                        {cols.map((col, key) => <td key={key}>{col.render(item)}</td>)}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


export default TableContainer