import React from "react"

import Loading from "shared/templates/Loading"
import Template from "shared/templates/DetailView"

import { DetailCard as Detail } from "shared/components/organism"

const DetailView = ({ loading, data }) => {

    if (loading) {
        return <Loading />
    }

    return (
        <Template title={`Overview: ${data.name}`}>
            <Template.Row>
                <Template.Item>
                    <Detail>
                        <Detail.Section title="User">
                            <Detail.Row>
                                <Detail.Item title="Username" text={data.username} />
                                <Detail.Item title="Email" text={data.email} />
                            </Detail.Row>
                            <Detail.Row>
                                <Detail.Item title="Phone" text={data.phone} />
                            </Detail.Row>
                        </Detail.Section>
                    </Detail>
                </Template.Item>
                <Template.Item>
                    <Detail>
                        <Detail.Section title="Address">
                            <Detail.Row>
                                <Detail.Item title="Suite" text={data.address.suite} />
                                <Detail.Item title="Street" text={data.address.street} />
                            </Detail.Row>
                            <Detail.Row>
                                <Detail.Item title="City" text={data.address.city} />
                                <Detail.Item title="Zipcode" text={data.address.zipcode} />
                            </Detail.Row>
                        </Detail.Section>
                    </Detail>
                </Template.Item>
            </Template.Row>
            <Template.Row className="mt-4">
                <Template.Item>
                    <Detail>
                        <Detail.Section title="Company">
                            <Detail.Row>
                                <Detail.Item title="Name" text={data.company.name} />
                            </Detail.Row>
                            <Detail.Row>
                                <Detail.Item title="Slogan" text={data.company.catchPhrase} />
                            </Detail.Row>
                        </Detail.Section>
                    </Detail>
                </Template.Item>
            </Template.Row>
        </Template>
    )
}

export default DetailView