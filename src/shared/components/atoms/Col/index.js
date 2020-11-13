import React from "react"
import { Col as RsCol } from "reactstrap"

const Col = ({ children, ...rest }) => <RsCol {...rest}>{children}</RsCol> 

export default Col;