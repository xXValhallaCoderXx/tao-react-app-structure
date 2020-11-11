import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';

const ListViewTemplate = ({ children, title }) => {
    return (
        <Container fluid className="p-4">
            <Container fluid>
                <Row>
                    <Link to="/products">Back</Link>
                </Row>
                <Row className="mt-4">
                    <h4>{title}</h4>
                </Row>
                <Row className="mt-4">
                    {children}
                </Row>
            </Container>
        </Container>
    )
}

export default ListViewTemplate