import React from "react"
import { Container } from "reactstrap"

const CenteredContentTemplate = ({ children }) => {
    return (
        <Container style={{ height: "100vh" }} fluid className="d-flex justify-content-center align-items-center">
            {children}
        </Container>
    )
}

export default CenteredContentTemplate