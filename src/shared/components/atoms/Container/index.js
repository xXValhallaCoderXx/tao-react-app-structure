import React from "react"
import { Container as RsContainer } from "reactstrap"

const Container = ({ children, ...props }) => {
    return <RsContainer {...props}>{children}</RsContainer>
}

export default Container