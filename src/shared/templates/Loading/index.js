import React from "react"
import { Text } from "shared/components/atoms"
import { Container, Spinner } from "reactstrap"

const LoadingTemplate = () => {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Spinner className="mb-4" style={{ height: 40, width: 40 }} />
            <Text variant="h4">Loading</Text>
        </Container>
    )
}

export default LoadingTemplate