import React from "react"
import { Label as RSLabel } from 'reactstrap';

const Label = ({ text, children }) => {
    return <RSLabel for={text} sm={2}>{children}</RSLabel>
}

export default Label