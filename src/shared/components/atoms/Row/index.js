import React from "react"
import { Row as RsRow } from "reactstrap"

const Row = ({ children, ...rest }) => <RsRow {...rest}>{children}</RsRow> 

export default Row;