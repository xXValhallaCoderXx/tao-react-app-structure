import React from "react"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"

import { ACTIONS, selectProductDetail, selectApiStatus } from "./slice/dux"

import Template from "shared/templates/DetailView"
import { DetailCard as Detail } from "shared/components/organism"
import { Container, Col, Row } from "reactstrap"

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
    const { address, company } = detail;
    return (
        <Template title={`Overview: ${detail.name}`}>
            <div>
                <Row>
                    <Col>
                        <Detail>
                            <Detail.Section title="User">
                                <Detail.Row>
                                    <Detail.Item title="Username" text={detail.username} />
                                    <Detail.Item title="Email" text={detail.email} />
                                </Detail.Row>
                                <Detail.Row>
                                    <Detail.Item title="Phone" text={detail.phone} />
                                </Detail.Row>
                            </Detail.Section>
                        </Detail>


                    </Col>
                    <Col>
                        <Detail>
                            <Detail.Section title="Address">
                                <Detail.Row>
                                    <Detail.Item title="Suite" text={address.suite} />
                                    <Detail.Item title="Street" text={address.street} />
                                </Detail.Row>
                                <Detail.Row>
                                    <Detail.Item title="City" text={address.city} />
                                    <Detail.Item title="Zipcode" text={address.zipcode} />
                                </Detail.Row>
                            </Detail.Section>
                        </Detail>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Detail>
                            <Detail.Section title="Company">
                                <Detail.Row>
                                    <Detail.Item title="Name" text={company.name} />
                                    <Detail.Item title="Email" text={company.email} />
                                </Detail.Row>
                                <Detail.Row>
                                    <Detail.Item title="Slogan" text={company.catchPhrase} />
                                </Detail.Row>
                            </Detail.Section>
                        </Detail>
                    </Col>
                </Row>
            </div>
        </Template>
    )
}

export default DetailContainer