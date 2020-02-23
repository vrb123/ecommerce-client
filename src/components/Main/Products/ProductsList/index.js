import React from "react";
import {List} from "antd";

import ProductRow from './ProductRow';

export default ({products, onSinglePress}) => {

    const renderProduct = product => (
        <List.Item key={`product{product.id}`}>
            <ProductRow {...product} onShowMore={onSinglePress}/>
        </List.Item>
    );

    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2
            }}
            dataSource={products}
            renderItem={renderProduct}
        />
    );
};
