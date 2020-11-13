import React from "react"
import Template from "shared/templates/CenteredContent"
import { Form } from "shared/components/organism"
import { Button, Card, Text } from "shared/components/atoms"
import { FormInput } from "shared/components/molecule"

const LoginContainer = ({onClick}) => {
    return (
        <Template>
            <Card>
                <Text className="mb-4 text-center" variant="h5">Login Form</Text>
                <Form>
                    <FormInput label="Email" id="email" disabled />
                    <FormInput label="Password" id="password" disabled />
                    <Button block type="submit" onClick={onClick}>Login</Button>
                </Form>
            </Card>
        </Template>
    )
}

export default LoginContainer