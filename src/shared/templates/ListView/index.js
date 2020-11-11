import React from "react"
import { Container, Row, Col } from 'reactstrap';

const ListViewTemplate = ({ title, children }) => {
    return (
        <Container fluid>
            <Container fluid className="p-5">
                <Row>
                    <h3>{title}</h3>
                </Row>
                <Row className="mt-3">
                    {children}
                </Row>
            </Container>
        </Container>
    )
}

export default ListViewTemplate