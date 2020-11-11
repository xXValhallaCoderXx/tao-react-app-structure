import React from "react"
import {Input, Label} from "shared/components/atoms"
import { FormGroup } from 'reactstrap';

const FormInput = ({ label, id, placeholder, type, disabled }) => {
    return (
        <FormGroup>
            <Label for={id} sm={2}>{label}</Label>
            <Input disabled={disabled} type={type} name={id} id={id} placeholder={placeholder} />
        </FormGroup>
    )
}

export default FormInput