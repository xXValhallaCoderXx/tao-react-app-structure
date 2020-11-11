import React from "react"
import { Button as RsButton } from "reactstrap"

const Button = ({ children, ...props }) => {
    return <RsButton {...props}>{children}</RsButton>
}

export default Button