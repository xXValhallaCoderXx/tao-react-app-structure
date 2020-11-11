import React from "react"
import { Container, Row, Col } from 'reactstrap';

const ListViewTemplate = ({ children }) => {
    return (
        <Container fluid>
            {children}
        </Container>
    )
}

export default ListViewTemplate