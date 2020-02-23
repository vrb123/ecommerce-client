import React from 'react';
import {Card, Descriptions} from "antd";
import ShowDetailsButton from "./ShowDetailsButton";
import trim_to_size from "../../../../../helpers/trim_to_size";

export default ({id, onShowMore, name, cost, description = "No description"}) => (
    <Card title={name} extra={
        <ShowDetailsButton
            title="Show"
            onClick={() => onShowMore(id)}
        />
    }>
        <Descriptions layout="horizontal" column={1}>

            <Descriptions.Item key={name + cost} label="Cost">
                {`$${cost}`}
            </Descriptions.Item>

            <Descriptions.Item key={name + description} label="Description">
                {trim_to_size(description, 20)}
            </Descriptions.Item>

        </Descriptions>
    </Card>
);
