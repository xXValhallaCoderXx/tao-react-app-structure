import React from "react"
import "./text-styles.css"

const variantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h5",
    subtitle2: "h6",
    body1: "p",
    body2: "p"
}

const Text = ({ className, variant, color, children, ...props }) => {
    const Component = variant ? variantMapping[variant] : "p";
    function handleColor() {
        return color ? `text--color-${color}` : ""
    }
    function handleClasses() {
        return `text--variant-${variant || "body1"} ${handleColor()} ${className}`
    }
    return (
        <Component className={handleClasses()} {...props}>{children}</Component>
    )
}

export default Text