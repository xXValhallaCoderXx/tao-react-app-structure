import React from "react"
import TopNavigation from "shared/components/organism/TopNavigation"
const TemplateMain = ({ children }) => {
    return (
        <div>
            <TopNavigation />
            {children}
        </div>
    )
}

export default TemplateMain