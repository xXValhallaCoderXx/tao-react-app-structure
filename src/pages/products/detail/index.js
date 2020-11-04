import React from "react"
import { useSelector } from 'react-redux'
import { selectUserName } from "../../../shared/slices/user"
import { selectToast } from "../../../shared/slices/toast"

const DetailContainer = () => {
    const user = useSelector(selectUserName);
    const toast = useSelector(selectToast);
    console.log("USER: ", toast)
    return (
        <div>Detail Container</div>
    )
}

export default DetailContainer