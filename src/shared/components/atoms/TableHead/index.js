import React from "react"

const TableHead = ({ children }) => {
    return (
        <thead>
            <tr>
                {React.Children.map(children || null, (child, i) => {
                    return <tr>{child}</tr>;
                })}
            </tr>
        </thead>
    )
}

export default TableHead