import React from "react"
import { ACTIONS } from "./slice/dux"
import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "./slice/dux"

import Table from "shared/components/organism/Table"

const ListContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts)
    const demo = [{ id: 1, name: "Nate", email: "test@gmail.com" }, { id: 2, name: "Nate 2", email: "test2@gmail.com" }]
    React.useEffect(() => {
        dispatch(ACTIONS.REQUEST_DATA())
    }, [])
    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Header.Item>ID</Table.Header.Item>
                    <Table.Header.Item>Name</Table.Header.Item>
                    <Table.Header.Item>Email</Table.Header.Item>
                </Table.Header>
                <Table.Body>
                    {demo}
                </Table.Body>
            </Table>
        </div>
    )
}

export default ListContainer