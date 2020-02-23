import React from 'react';
import {Descriptions, Divider} from "antd";
import GoBackButton from "./GoBackButton";

export default ({onShowAll, id, productSpecifications, name, description, cost}) => (
    <div>
        <Descriptions layout="horizontal"
                      bordered
                      column={1}
                      title={
                          <h1>
                              {name} <Divider type="vertical"/> <GoBackButton title="Back to list" onClick={onShowAll}/>
                          </h1>
                      }
        >

            <Descriptions.Item key={id + name} label="Cost">
                {`$${cost}`}
            </Descriptions.Item>

            <Descriptions.Item key={id + description} label="Description">
                {description}
            </Descriptions.Item>

            <Descriptions.Item key={id + "spec"} label="Specifications">
                <div>
                    <Descriptions bordered layout="horizontal"
                                  column={1}>
                        {
                            productSpecifications.map(productSpec => (
                                <Descriptions.Item key={id + productSpec.name} label={productSpec.formattedName}>
                                    {productSpec.value}
                                </Descriptions.Item>
                            ))
                        }
                    </Descriptions>
                </div>
            </Descriptions.Item>

        </Descriptions>
    </div>
)