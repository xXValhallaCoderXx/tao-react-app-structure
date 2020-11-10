import React from "react"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"

import { ACTIONS, selectProductDetail, selectApiStatus } from "./slice/dux"

import Template from "shared/templates/Main"

const DetailContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detail = useSelector(selectProductDetail)
    const api = useSelector(selectApiStatus)

    React.useEffect(() => {
        dispatch(ACTIONS.REQUEST_DATA(id))
    }, [])
    if (api.loading) {
        return <div>Loading</div>
    }
    return (
        <Template>Name: {detail.name}</Template>
    )
}

export default DetailContainer