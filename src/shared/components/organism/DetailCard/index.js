import React from "react"
import { Card, Container, Text, Row, Col  } from "shared/components/atoms"

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
            <Text variant="h6">{title}</Text>
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
            <Text variant="subtitle1">{title}</Text>
            <Text variant="body1">{text}</Text>
        </Col>
    )
}

DetailCard.Section = Section;
DetailCard.Row = CardRow
DetailCard.Item = RowItem

export default DetailCard