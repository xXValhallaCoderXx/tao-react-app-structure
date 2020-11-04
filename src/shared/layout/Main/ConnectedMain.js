import React from "react"
import MainLayout from "./Main"

const ConnectedLayoutMain = ({ children }) => {
    return (
        <MainLayout>{children}</MainLayout>
    )
}

export default ConnectedLayoutMain