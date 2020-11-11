import React from "react"
import Input from "shared/components/atoms/Input"
import Label from "shared/components/atoms/Label"
import { FormGroup } from 'reactstrap';

const FormInput = ({ label, id, placeholder, type }) => {
    return (
        <FormGroup>
            <Label for={id} sm={2}>{label}</Label>
            <Input type={type} name={id} id={id} placeholder={placeholder} />
        </FormGroup>
    )
}

export default FormInput