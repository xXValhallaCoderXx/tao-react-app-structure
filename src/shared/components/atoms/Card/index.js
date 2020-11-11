import React from "react"
import { Card as RsCard } from "reactstrap"


const Card = ({ children }) => {
return <RsCard className="p-4">{children}</RsCard>
}

export default Card
