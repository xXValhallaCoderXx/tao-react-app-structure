import React from "react"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"

import { ACTIONS } from "./slice/dux"
import { selectProductDetail, selectApiStatus } from "./slice/selectors"

import DetailView from "./Detail"

const DetailContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector(selectProductDetail)
    const api = useSelector(selectApiStatus)

    React.useEffect(() => {
        dispatch(ACTIONS.REQUEST_DATA(id))
    }, [])

    return (
        <DetailView data={data} loading={api.loading} />
    )
}

export default DetailContainer