import React from "react"
import Input from "shared/components/atoms/Input"
import Label from "shared/components/atoms/Label"
import { FormGroup, Col } from 'reactstrap';

const FormInput = ({ label, id, placeholder, type }) => {
    return <FormGroup row>
        <Label for="exampleEmail" sm={2}>{label}</Label>
        <Col sm={10}>
            <Input type={type} name={id} id={id} placeholder={placeholder} />
        </Col>
    </FormGroup>
}

export default FormInput