import React from "react"
import { Form as RsForm } from "reactstrap"

// In a real app the "Form Organism" will handle form state
const Form = ({ children }) => {
    return <RsForm>{children}</RsForm>
}

export default Form