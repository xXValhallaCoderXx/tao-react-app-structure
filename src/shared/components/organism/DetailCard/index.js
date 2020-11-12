import React from "react"
import { Row, Col } from "reactstrap"
import { Card, Container, Text } from "shared/components/atoms"
import { FormInput } from "shared/components/molecule"

const DetailCard = ({ children }) => {
    return (
        <Card>
            {children}
        </Card>
    )
}

const Section = ({ title, children }) => {
    return (
        <Container>
            <Text variant="subtitle2">{title}</Text>
            {children}
        </Container>
    )
}

const CardRow = ({ children }) => {
    return <Row>{children}</Row>
}

const RowItem = ({ title, text }) => {
    return (
        <Col>
            <Text variant="h6">{title}</Text>
            <Text variant="body1">{text}</Text>
        </Col>
    )
}

DetailCard.Section = Section;
DetailCard.Row = CardRow
DetailCard.Item = RowItem

export default DetailCard