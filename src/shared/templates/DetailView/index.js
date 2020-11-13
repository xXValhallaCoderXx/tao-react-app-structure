import React from "react"

import { Container, Col, Row, Link } from "shared/components/atoms"

const DetailTemplate = ({ children, title }) => {
    return (
        <Container fluid className="p-5">
            <Container fluid>
                <Row>
                    <Link to="/products">Back</Link>
                </Row>
                <Row className="mt-4">
                    <h4>{title}</h4>
                </Row>
                <Row className="mt-4">
                    <Container fluid className="p-0">
                        {children}
                    </Container>
                </Row>
            </Container>
        </Container>
    )
}

const DetailRow = ({ children, ...rest }) => {
    return (
        <Row {...rest}>
            {children}
        </Row>
    )
}

const Item = ({ children }) => {
    return (
        <Col xs={4}>{children} </Col>
    )
}

DetailTemplate.Row = DetailRow
DetailTemplate.Item = Item

export default DetailTemplate