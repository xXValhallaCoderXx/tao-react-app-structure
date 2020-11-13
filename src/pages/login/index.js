import React from "react"
import history from "shared/utils/router"

import LoginView from "./Login"

const LoginContainer = () => {
    function onClick() {
        history.push("/products")
    }
    return <LoginView onClick={onClick} />
}

export default LoginContainer